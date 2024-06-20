import React, { useEffect, useRef } from 'react';
import { useGetMessage } from "@/hooks/useMessage";
import { useAuthContext } from "@/contexts/AuthContext";
import { useListenMessage } from "@/hooks/useListen";
import { extractTime } from "@/utils";
import * as S from "../../styles";

const MessageList = () => {
  const { messages } = useGetMessage();
  const { userInfo } = useAuthContext();
  useListenMessage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <S.MessagesList>
      {messages.map((message) => {
        const isOwnMessage = message?.senderId === userInfo?.userId;
        return (
          <S.MessageItem key={message?._id} isOwnMessage={isOwnMessage}>
            <S.ChatHeader isOwnMessage={isOwnMessage}>
              <span>{isOwnMessage ? 'You' : message?.senderName}</span>
              <S.MessageTime>{extractTime(message?.createdAt)}</S.MessageTime>
            </S.ChatHeader>
            <S.MessageContent isOwnMessage={isOwnMessage}>
              {message?.message}
            </S.MessageContent>
            {/* {isOwnMessage && (
              <S.ChatFooter>
                Seen at {extractTime(message?.createdAt)}
              </S.ChatFooter>
            )} */}
          </S.MessageItem>
        );
      })}
      <div ref={messagesEndRef} />
    </S.MessagesList>
  );
};

export default MessageList;
