import useConversation from "@/hooks/useConversation";
import * as S from "../styles";
interface ConversationProps {
    key: string;
    conversation: any;
}
const Conversation = ({key,conversation}:ConversationProps) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    return (<S.FriendItem
        key={key}
        onClick={() => {
            setSelectedConversation(conversation);
        }}
        style={{
            backgroundColor: isSelected ? "#b9b4c7" : "transparent",
            borderRadius: isSelected ? "20px 0px 0px 20px" : "none",
        }}
    >
        <S.FriendImage src={conversation?.participants[0]?.avatar} alt={conversation.participants[0]?.displayName} />
        <S.FriendName>{conversation.participants[0]?.displayName}</S.FriendName>
    </S.FriendItem>);
}

export default Conversation;