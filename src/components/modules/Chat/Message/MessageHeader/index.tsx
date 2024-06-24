import useConversation from "@/hooks/useConversation";
import * as S from "../../styles";

const MessageHeader = () => {
  const { selectedConversation } = useConversation();
  const isActive = selectedConversation.participants[0]?.isActive;

  return (
    <S.ChatHeader>
      <S.FriendImage src={selectedConversation.participants[0]?.avatar} alt="Avatar" />
      <S.ChatFriendName>{selectedConversation.participants[0]?.displayName}</S.ChatFriendName>
      {isActive && (
        <S.ActiveStatus>
          <S.ActiveDot /> Đang hoạt động
        </S.ActiveStatus>
      )}
    </S.ChatHeader>
  );
};

export default MessageHeader;
