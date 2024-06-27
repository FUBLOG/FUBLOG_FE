"use client";

import React from "react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";
import fontWeight from "@/style/themes/default/fontWeight";
import Link from "next/link";

interface TotalFriendProps {
  visible: boolean;
  onClose: () => void;
  friends: any;
  totalFriends: any;
}

const TotalFriend: React.FC<TotalFriendProps> = ({
  visible,
  onClose,
  friends,
  totalFriends,
}) => {
  const handleProfileClick = (id: number) => {
    onClose();
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
        <Typography
          variant="body-text-small-bold"
          color="#000"
          align="center"
          fontSize="14px"
          margin="0px"
          padding="0px"
        >
          {totalFriends} Bạn bè
        </Typography>
        <S.FriendsGrid>
          {friends?.map((friend: any) => (
            <Link
              onClick={() => handleProfileClick(friend?.profileHash)}
              href={`/profile?pId=${friend?.profileHash}`}
              key={friend?._id}
            >
              <S.FriendCard>
                <S.FriendImageContainer>
                  <S.FriendAvatar
                    src={friend?.userInfo?.avatar}
                    alt={friend?.displayName}
                  />
                </S.FriendImageContainer>
                <S.FriendInfo>
                  <S.FriendName
                    variant="body-text-small-normal"
                    fontSize="14px"
                    style="italic"
                  >
                    {friend?.displayName}
                  </S.FriendName>
                  <S.FriendCount
                    variant="body-text-small-normal"
                    style="italic"
                  >
                    {friend.friendCount} bạn bè
                  </S.FriendCount>
                </S.FriendInfo>
              </S.FriendCard>
            </Link>
          ))}
        </S.FriendsGrid>
      </S.ModalContent>
    </S.CustomModal>
  );
};

export default TotalFriend;
