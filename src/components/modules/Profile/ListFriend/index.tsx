"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";
import TotalFriend from "../TotalFriend";
import Link from "next/link";
import { getRequest } from "@/services/request";
import { friendEndpoint } from "@/services/endpoint";
import useThemeStore from "@/hooks/useTheme";

function ListFriend({ profileHash, friends, setFriend, setLoading }: any) {
  const darkMode = useThemeStore((state) => state.darkMode);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const getFriendByID = async () => {
      setLoading(true);
      await getRequest(friendEndpoint.GET_FRIEND_ID + profileHash).then(
        (res) => {
          setFriend(res?.metadata);
          return res;
        }
      );
    };
    getFriendByID();
    setLoading(false);
  }, [profileHash]);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <S.Wrapper className={darkMode? "theme-dark" : "theme-light"}>
      <S.Title>
        <Typography
          variant="body-text-small-bold"
          fontSize="18px"
          color={darkMode ? "white" : "#352F44"}
        >
          Bạn bè
        </Typography>
        <S.ViewAllButton onClick={handleOpenModal}>
          <Typography
            variant="body-text-small-bold"
            color={darkMode ? "white" : "#352F44"}
            style="oblique"
            margin="0px 34px"
            fontSize="14px"
          >
            Xem tất cả bạn bè
          </Typography>
        </S.ViewAllButton>
      </S.Title>
      <S.FriendContainer>
        {friends?.slice(0, 9).map((friend: any) => (
          <Link href={`/profile?pId=${friend?.profileHash}`} key={friend._id}>
            <S.Friend>
              <S.FriendImageContainer>
                <Image
                  alt={friend?.displayName}
                  src={friend?.userInfo?.avatar}
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </S.FriendImageContainer>
              <S.FriendName variant="body-text-small-normal">
                <Typography
                  align="center"
                  color={darkMode ? "white" : "#352F44"}
                >
                  {friend?.displayName}
                </Typography>
              </S.FriendName>
            </S.Friend>
          </Link>
        ))}
      </S.FriendContainer>

      <TotalFriend
        visible={modalVisible}
        onClose={handleCloseModal}
        friends={friends}
        totalFriends={friends?.length}
      />
    </S.Wrapper>
  );
}

export default ListFriend;
