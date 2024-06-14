import { useGetMessage } from "@/hooks/useMessage";
import * as S from "../../styles";
import { useEffect, useRef } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { useListenMessage } from "@/hooks/useListen";
const MessageList = () => {
  const { messages } = useGetMessage();
  const { userInfo } = useAuthContext();
  useListenMessage();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <S.MessagesList>
      {messages.map((message) => (
        <S.MessageItem
          key={message?._id}
          isOwnMessage={message.senderId === userInfo?.userId}
        >
          <S.MessageContent>{message.message}</S.MessageContent>
        </S.MessageItem>
      ))}
      <div ref={messagesEndRef} />
    </S.MessagesList>
  );
};

export default MessageList;
