import { useAuthContext } from "@/contexts/AuthContext";
import * as S from "../styles";
import { useSocketContext } from "@/contexts/SocketContext";
import { useEffect, useState } from "react";
import { Badge, message } from "antd";
import useConversation from "@/hooks/useConversation";
import { getFriendList } from "@/services/api/friend";
import { getConversation } from "@/services/api/chat";

const FriendOnline = () => {
  const { userOnline } = useSocketContext();
  const { userInfo } = useAuthContext();
  const [friends, setFriends] = useState<any>([]);
  const { setSelectedConversation } = useConversation();
  useEffect(() => {
    const handleFriendsOnline = async () => {
      const friendList = await getFriendList().then(
        (res) => res?.metadata?.friendList
      );

      const friendsOnline = friendList
        ?.filter((friend: any) => friend._id !== userInfo?._id)
        ?.map((friend: any) => {
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
    handleFriendsOnline();
  }, [userOnline]);

  const clickFriend = async (friend: any) => {
    const conversation = await getConversation(friend._id).then(
      (res: any) => res?.metadata
    );
    if (conversation !== null) {
      setSelectedConversation(conversation);
    } else {
      setSelectedConversation({
        participants: [
          {
            _id: friend._id,
            displayName: friend?.displayName,
            avatar: friend?.userInfo?.avatar,
          },
        ],
        messages: [],
        _id: friend._id,
      });
    }
  };

  return (
    <S.ActiveFriends>
      {friends?.map((friend: any) => (
        <S.ActiveFriend key={friend._id} onClick={() => clickFriend(friend)}>
          <Badge dot={friend?.action} status="success">
            <S.ActiveFriendImage
              src={friend?.userInfo?.avatar}
              alt={friend?.displayName}
              isActive
            />
          </Badge>
          <S.ActiveFriendName>{friend?.displayName}</S.ActiveFriendName>
        </S.ActiveFriend>
      ))}
    </S.ActiveFriends>
  );
};

export default FriendOnline;