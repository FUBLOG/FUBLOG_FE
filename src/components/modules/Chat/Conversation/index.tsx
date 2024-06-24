import useConversation from "@/hooks/useConversation";
import * as S from "../styles";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { Badge } from "antd";
import { useSocketContext } from "@/contexts/SocketContext";
interface ConversationProps {
  key: string;
  conversation: any;
}

const Conversation = ({ key, conversation }: ConversationProps) => {
  const { userInfo } = useAuthContext();
  const { socket } = useSocketContext();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [unreadCount, setUnreadCount] = useState(0);
  const isSelected = selectedConversation?._id === conversation._id;
  let lastMessage = conversation?.lastMessage?.message;
  if (
    conversation?.lastMessage?.senderId !== conversation?.participants[0]?._id
  ) {
    lastMessage = "You: " + lastMessage;
  }
  useEffect(() => {
    if (conversation?.lastMessage?.senderId === userInfo?.userId) {
      setUnreadCount(0);
    } else {
      setUnreadCount(conversation?.unReadCount);
    }
  }, [conversation]);
  const handleClickConversation = async () => {
    if (unreadCount > 0) {
      setUnreadCount(0);
      if (socket) {
        socket.emit("ping", conversation._id);
      }
    }
    setSelectedConversation({ ...conversation, unReadCount: 0 });
  };

  return (
    <S.FriendItem
      key={key}
      onClick={handleClickConversation}
      isSelected={isSelected}
    >
      <Badge
        count={unreadCount}
        style={{
          marginTop: "10px",
        }}
      >
        <S.FriendImage
          src={conversation?.participants[0]?.avatar}
          alt={conversation.participants[0]?.displayName}
        />
      </Badge>
      <div>
        <S.FriendName>{conversation.participants[0]?.displayName}</S.FriendName>
        <S.LastMessage
          style={{
            fontWeight: unreadCount > 0 ? "bold" : "normal",
            color:
              conversation?.lastMessage?.senderId !== userInfo?.userId
                ? "black"
                : "#888",
          }}
        >
          {lastMessage}
        </S.LastMessage>
      </div>
    </S.FriendItem>
  );
};

export default Conversation;
