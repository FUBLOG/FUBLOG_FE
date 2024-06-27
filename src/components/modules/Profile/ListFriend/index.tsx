"use client";

import React, { useState } from "react";
import Image from "next/legacy/image";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";
import TotalFriend from "../TotalFriend";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

function ListFriend() {
  const { userInfo } = useAuthContext();
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const friends = [
    { id: 1, name: "Vĩnh Trung", image: "/vinhtrung.png", friendCount: 12 },
    { id: 2, name: "Thu Phương", image: "/thuphuong.png", friendCount: 8 },
    { id: 3, name: "Vĩnh Trung", image: "/vinhtrung.png", friendCount: 12 },
    { id: 4, name: "Thu Phương", image: "/thuphuong.png", friendCount: 8 },
    { id: 5, name: "Vĩnh Trung", image: "/vinhtrung.png", friendCount: 12 },
    { id: 6, name: "Thu Phương", image: "/thuphuong.png", friendCount: 8 },
    { id: 7, name: "Thanhthuy", image: "/thanhthuy.png", friendCount: 12 },
    { id: 8, name: "Văn Mạnh", image: "/vanmanh.png", friendCount: 8 },
    { id: 9, name: "Vĩnh Trung", image: "/vinhtrung.png", friendCount: 12 },
  ];

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleFriendClick = () => {
   
  };

  return (
    <S.Wrapper>
      <S.Title>
        <Typography variant="body-text-small-bold" fontSize="18px" color="#fff !important">
          Bạn bè
        </Typography>
        <S.ViewAllButton onClick={handleOpenModal}>
          <Typography variant="body-text-small-bold" color="#fff" style="oblique" margin="0px 34px" fontSize="14px">
            Xem tất cả bạn bè
          </Typography>
        </S.ViewAllButton>
      </S.Title>
      <S.FriendContainer>
        {friends.slice(0, 9).map((friend) => (
          <S.Friend key={friend.id} onClick={() => handleFriendClick()}>
            <S.FriendImageContainer>
              <Image
                alt={friend.name}
                src={friend.image}
                width={50}
                height={50}
                objectFit="cover"
              />
            </S.FriendImageContainer>
            <S.FriendName variant="body-text-small-normal">{friend.name}</S.FriendName>
          </S.Friend>
        ))}
      </S.FriendContainer>

      <TotalFriend
        visible={modalVisible}
        onClose={handleCloseModal}
        friends={friends}
        totalFriends={friends.length}
      />
    </S.Wrapper>
  );
}

export default ListFriend;
