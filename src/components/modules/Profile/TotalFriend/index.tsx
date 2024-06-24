// Profile/TotalFriend/index.tsx
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
  totalFriends: number; // Tổng số bạn bè của người dùng hiện tại
}

const TotalFriend: React.FC<TotalFriendProps> = ({ visible, onClose, friends, totalFriends }) => {
  const router = useRouter();

  const handleProfileClick = (id: number) => {
    router.push(`/profile/${id}`);
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={400} // Giảm kích thước modal
      centered
      bodyStyle={{ padding: 0 }}
    >
      <S.ModalContent>
        <Typography variant="h5"
            
            fontSize="28px"color="#352f44" align="center"  >
          Tất cả bạn bè
        </Typography>
        <Typography variant="caption-small"
           
            fontSize="16px" color="#352f44" align="center">
          {totalFriends} bạn bè
        </Typography>
        <S.FriendsGrid>
          {friends.map((friend) => (
            <S.FriendCard key={friend.id} onClick={() => handleProfileClick(friend.id)}>
              <S.FriendAvatar src={friend.image} alt={friend.name} />
              <S.FriendName variant="caption-normal">
                {friend.name}
              </S.FriendName>
              <S.FriendCount variant="caption-small">
                {friend.friendCount} bạn bè
              </S.FriendCount>
            </S.FriendCard>
          ))}
        </S.FriendsGrid>
      </S.ModalContent>
    </Modal>
  );
};

export default TotalFriend;
