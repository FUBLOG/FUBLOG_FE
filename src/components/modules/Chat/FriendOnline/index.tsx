import { useAuthContext } from "@/contexts/AuthContext";
import * as S from "../styles";
import { useSocketContext } from "@/contexts/SocketContext";
import { useEffect, useState } from "react";
import { Badge } from "antd";
import useConversation from "@/hooks/useConversation";

const FriendOnline = () => {
  const { userInfo } = useAuthContext();
  const { userOnline } = useSocketContext();
  const [friends, setFriends] = useState<any>([]);
  const { setSelectedConversation } = useConversation();

  const clickFriend = async (friend: any) => {
    setSelectedConversation({
      _id: "123",
      participants: [
        {
          _id: friend?.friend_id,
          avatar: friend.avatar === "" ? "./jos.jpg" : friend.avatar,
          displayName: friend.displayName,
          isActive: friend.action,  
        },
      ],
      messages: [],
    });
  };

  useEffect(() => {
    const handleFriendsOnline = async () => {
      const listFriends = userInfo?.userInfo?.friendList;
      const friendsOnline = listFriends?.map((friend: any) => {
        if (userOnline.includes(friend?.friend_id)) {
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

return (
<S.ActiveFriends>
{friends?.map((friend: any) => (
<S.ActiveFriend key={friend._id} onClick={() => clickFriend(friend)}>
<Badge dot={friend.action} status="success">
<S.ActiveFriendImage
src={friend?.avatar === "" ? "./jos.jpg" : friend?.avatar}
alt={friend.displayName}
isActive
/>
</Badge>
<S.ActiveFriendName>{friend.displayName}</S.ActiveFriendName>
</S.ActiveFriend>
))}
</S.ActiveFriends>
);
};

export default FriendOnline;