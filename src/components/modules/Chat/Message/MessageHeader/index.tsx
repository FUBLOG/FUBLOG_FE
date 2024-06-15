import useConversation from "@/hooks/useConversation";
import * as S from "../../styles";
const MessageHeader = () => {
    const { selectedConversation } = useConversation();
    return (<S.ChatHeader>
        <S.FriendImage src={selectedConversation.participants[0]?.avatar} alt="Văn Mạnh" />
        <S.ChatFriendName>{selectedConversation.participants[0]?.displayName}</S.ChatFriendName>
        <S.ActiveStatus>Đang hoạt động</S.ActiveStatus>
    </S.ChatHeader>);
}

export default MessageHeader;