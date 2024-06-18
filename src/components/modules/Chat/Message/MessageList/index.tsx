// MessageList.tsx
import React, { useEffect, useRef } from 'react';
import { useGetMessage } from "@/hooks/useMessage";
import { useAuthContext } from "@/contexts/AuthContext";
import { useListenMessage } from "@/hooks/useListen";
import { extractTime } from "@/utils";
import {
  MessagesList,
  ChatContainer,
  ChatHeader,
  ChatTime,
  ChatBubble,
  ChatFooter
} from "../../styles";

const MessageList = () => {
  const { messages } = useGetMessage();
  const { userInfo } = useAuthContext();
  useListenMessage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <MessagesList>
      {messages.map((message) => {
        const isOwnMessage = message.senderId === userInfo?.userId;
        return (
          <ChatContainer key={message?._id}>
            <ChatHeader>
              {isOwnMessage ? userInfo?.profileHash : message.senderName}
              <ChatTime>{extractTime(message?.createdAt)}</ChatTime>
            </ChatHeader>
            <ChatBubble isOwnMessage={isOwnMessage}>{message.message}</ChatBubble>
            <ChatFooter isOwnMessage={isOwnMessage}>
              {isOwnMessage ? 'Seen' : 'Delivered'}
            </ChatFooter>
          </ChatContainer>
        );
      })}
      <div ref={messagesEndRef} />
    </MessagesList>
  );
};

export default MessageList;
