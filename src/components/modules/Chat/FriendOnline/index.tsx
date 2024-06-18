import { useAuthContext } from "@/contexts/AuthContext";
import * as S from "../styles";
import { useSocketContext } from "@/contexts/SocketContext";
import { useEffect, useState } from "react";
import { Badge, message } from "antd";
import useConversation from "@/hooks/useConversation";
import _ from "lodash";

interface FriendOnlineProps {
  conversation: any;
}

const FriendOnline = ({ conversation }: FriendOnlineProps) => {
  const { userInfo } = useAuthContext();
  const { userOnline } = useSocketContext();
  const [friends, setFriends] = useState<any>([]);
  const { setSelectedConversation } = useConversation();
  const clickFriend = async (friend: any) => {
    const select = conversation?.filter((c: any) => {
      return c?.participants[0]?._id === friend?.friend_id;
    });
    if (select.length === 0) {
      setSelectedConversation({
        _id: _.uniqueId(),
        participants: [
          {
            _id: friend?.friend_id,
            avatar: friend?.avatar,
            displayName: friend?.displayName,
          },
        ],
        messages: [],
      });
    } else {
      setSelectedConversation(select[0]);
    }
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
  }, [userOnline]);

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
