import React, { useEffect, useRef } from "react";
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
  }, [messages, userInfo?._id]);

  return (
    <S.MessagesList>
      {messages.map((message) => {
        let isOwnMessage = message?.senderId === userInfo?._id;
        return (
          <S.MessageItem key={message?._id} isOwnMessage={isOwnMessage}>
            <S.ChatHeader isOwnMessage={isOwnMessage}>
              <span>{isOwnMessage ? "You" : <></>}</span>
              <S.MessageTime>{extractTime(message?.createdAt)}</S.MessageTime>
            </S.ChatHeader>
            <S.MessageContent isOwnMessage={isOwnMessage}>
              {message.message}
            </S.MessageContent>
          </S.MessageItem>
        );
      })}
      <div ref={messagesEndRef} />
    </S.MessagesList>
  );
};

export default MessageList;