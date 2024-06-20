import { useAuthContext } from "@/contexts/AuthContext";
import * as S from "../styles";
import { useSocketContext } from "@/contexts/SocketContext";
import { useEffect, useState } from "react";
import { Badge } from "antd";
import useConversation from "@/hooks/useConversation";
import { useGetFriendList } from "@/hooks/useFriend";

const FriendOnline = () => {
  const { userInfo } = useAuthContext();
  const { userOnline } = useSocketContext();
  const [friends, setFriends] = useState<any>([]);
  const listFriends = useGetFriendList();
  const { setSelectedConversation } = useConversation();

  const clickFriend = async (friend: any) => {
    
  };

  useEffect(() => {
    const handleFriendsOnline = async () => {
      const friendsOnline = listFriends?.map((friend: any) => {
        if (userOnline.includes(friend?._id)) {
          return {
            ...friend,
            action: true,
          };
        }
        return {
          ...friend,
          action: false,
        };
      });
      setFriends(friendsOnline);
    };
    if (userInfo) {
      handleFriendsOnline();
    }
  }, [userOnline, userInfo]);

  return (<S.ActiveFriends>
    {friends?.map((friend: any) => (
      <S.ActiveFriend key={friend._id} onClick={() => clickFriend(friend)}>
        <Badge dot={friend?.action} status="success">
          <S.ActiveFriendImage src={friend?.userInfo?.avatar} alt={friend?.displayName} isActive />
        </Badge>
        <S.ActiveFriendName>{friend?.displayName}</S.ActiveFriendName>
      </S.ActiveFriend>
    ))}
  </S.ActiveFriends>);
}

export default FriendOnline;