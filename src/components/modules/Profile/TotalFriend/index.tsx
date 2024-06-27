"use client";

import React from "react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";
import fontWeight from "@/style/themes/default/fontWeight";

interface Friend {
  id: number;
  name: string;
  image: string;
  friendCount: number;
}

interface TotalFriendProps {
  visible: boolean;
  onClose: () => void;
  friends: Friend[];
  totalFriends: number;
}

const TotalFriend: React.FC<TotalFriendProps> = ({
  visible,
  onClose,
  friends,
  totalFriends,
}) => {
  const router = useRouter();

  const handleProfileClick = (id: number) => {
    router.push(`/profile?pId=${id}`);
  };

  return (
    <S.CustomModal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
      
      bodyStyle={{ padding: 0 }}
    >
      <S.ModalContent>
        
        <Typography variant="h5" color="#000" align="center" fontSize="24px">
          Tất cả bạn bè
        </Typography>
        <Typography variant="body-text-small-bold" color="#000" align="center" fontSize="14px"  margin="0px" padding="0px" >
          {totalFriends} Bạn bè
        </Typography>
        <S.FriendsGrid>
          {friends.map((friend) => (
            <S.FriendCard
              key={friend.id}
              onClick={() => handleProfileClick(friend.id)}
            >
              <S.FriendImageContainer>
                <S.FriendAvatar src={friend.image} alt={friend.name} />
              </S.FriendImageContainer>
              <S.FriendInfo>
                <S.FriendName variant="body-text-small-normal" fontSize="14px" style="italic" >
                  {friend.name}
                </S.FriendName>
                <S.FriendCount variant="body-text-small-normal" style="italic">
                  {friend.friendCount} bạn bè
                </S.FriendCount>
              </S.FriendInfo>
            </S.FriendCard>
          ))}
        </S.FriendsGrid>
      </S.ModalContent>
    </S.CustomModal>
  );
};

export default TotalFriend;
