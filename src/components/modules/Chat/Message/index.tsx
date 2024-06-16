import * as S from "../styles";
import { useEffect, useRef } from "react";
import useConversation from "@/hooks/useConversation";
import MessageList from "./MessageList";
import MessageHeader from "./MessageHeader";
import InputMessage from "./InputMessage";

const Message = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <S.ChatContainer>
          <MessageHeader />
          <MessageList />
          <InputMessage />
        </S.ChatContainer>
      )}
    </>
  );
};
const NoChatSelected = () => {
  return (
    <S.NoChatSelected>
      <S.NoChatSelectedText>
        Chọn một cuộc trò chuyện để bắt đầu nào!
      </S.NoChatSelectedText>
    </S.NoChatSelected>
  );
};
export default Message;