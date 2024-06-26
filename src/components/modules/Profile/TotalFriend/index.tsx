
"use client";

import React from "react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";

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

const TotalFriend: React.FC<TotalFriendProps> = ({ visible, onClose, friends, totalFriends }) => {
  const router = useRouter();

  const handleProfileClick = (id: number) => {
    router.push(`/profile/${id}`);
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
        <Typography variant="h5" color="#352f44" align="center" fontSize="26px" >
          Tất cả bạn bè
        </Typography>
        <Typography variant="body-text-small-bold" color="#9b98af" align="center" fontSize="20px"  margin="0px" padding="0px" >
          {totalFriends} Bạn bè
        </Typography>
        <S.FriendsGrid>
          {friends.map((friend) => (
            <S.FriendCard key={friend.id} onClick={() => handleProfileClick(friend.id)}>
              <S.FriendImageContainer>
                <S.FriendAvatar src={friend.image} alt={friend.name} />
              </S.FriendImageContainer>
              <S.FriendInfo>
                <S.FriendName variant="caption-small" fontSize="14px" style="oblique" >
                  {friend.name}
                </S.FriendName>
                <S.FriendCount variant="caption-small" style="italic">
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
