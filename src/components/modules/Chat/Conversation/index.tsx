import useConversation from "@/hooks/useConversation";
import * as S from "../styles";
import { useEffect } from "react";
import { useSocketContext } from "@/contexts/SocketContext";
import { useListenConversation } from "@/hooks/useListen";
interface ConversationProps {
    key: string;
    conversation: any;
}

const Conversation = ({ key, conversation }: ConversationProps) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    let lastMessage = conversation?.lastMessage?.message
    if (conversation?.lastMessage?.senderId !== conversation?.participants[0]?._id) {
        lastMessage = 'You: ' + lastMessage;

    }
    return (
        <S.FriendItem
            key={key}
            onClick={() => {
                setSelectedConversation(conversation);
            }}
            isSelected={isSelected}
        >
            <S.FriendImage src={conversation?.participants[0]?.avatar} alt={conversation.participants[0]?.displayName} />
            <div>
                <S.FriendName>{conversation.participants[0]?.displayName}</S.FriendName>
                <S.LastMessage>{lastMessage}</S.LastMessage>
            </div>
        </S.FriendItem>
    );
}

export default Conversation;
