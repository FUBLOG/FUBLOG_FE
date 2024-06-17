import useConversation from "@/hooks/useConversation";
import * as S from "../styles";
interface ConversationProps {
    key: string;
    conversation: any;
}
const Conversation = ({key,conversation}:ConversationProps) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const lastMessage = conversation?.messages.length > 0 
    ? conversation.messages[conversation.messages.length - 1].text 
    : 'Bắt đầu trò chuyện';
    return (<S.FriendItem
        key={key}
        onClick={() => {
            setSelectedConversation(conversation);
        }}
        style={{
            backgroundColor: isSelected ? "#e5e5e5" : "transparent",
            borderRadius: isSelected ? "0px 0px 0px 0px" : "none",

        }}
    >
        <S.FriendImage src={conversation?.participants[0]?.avatar} alt={conversation.participants[0]?.displayName} />
        <S.FriendName>{conversation.participants[0]?.displayName}</S.FriendName>
        <S.LastMessage>{lastMessage}</S.LastMessage>
    </S.FriendItem>);
}

export default Conversation;