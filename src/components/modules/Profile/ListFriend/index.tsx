"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";
import TotalFriend from "../TotalFriend";
import { useProfile } from "@/hooks/useProfile";
import Link from "next/link";
import { getRequest } from "@/services/request";
import { friendEndpoint } from "@/services/endpoint";

function ListFriend() {
  const [modalVisible, setModalVisible] = useState(false);
  const { profile } = useProfile();

  // const [friends, setFriend] = useState({  _id: "",
  //   displayName: "",
  //   firstName: "",
  //   lastName: "",
  //   profileHash: "", });
  useEffect(() => {
    const getFriendByID = async () => {
      profile.info?.friendList.map(async (friend: string) => {
        console.log("friend", friend);

        await getRequest(friendEndpoint.GET_FRIEND_ID + friend).then((res) => {
          console.log("res", res);
          // setFriend({
          //   id: friend,
          //   profileHash: res?.metadata?.friend,
          //   name: res?.metadata?.friend?.name,
          //   image: res?.metadata?.friend?.image,
          //   friendCount: res?.metadata?.friend?.friendCount,
          // });
          // return res;
        });
      });
    };
    getFriendByID();
    console.log(profile?.info?.friendList);
  }, []);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <S.Wrapper>
      <S.Title>
        <Typography
          variant="body-text-small-bold"
          fontSize="18px"
          color="#fff !important"
        >
          Bạn bè
        </Typography>
        <S.ViewAllButton onClick={handleOpenModal}>
          <Typography
            variant="body-text-small-bold"
            color="#fff"
            style="oblique"
            margin="0px 34px"
            fontSize="14px"
          >
            Xem tất cả bạn bè
          </Typography>
        </S.ViewAllButton>
      </S.Title>
      {/* <S.FriendContainer>
        {friends?.slice(0, 9).map((friend: any) => (
          <Link href={`${friend.profileHash}`}>
            <S.Friend key={friend.id}>
              <S.FriendImageContainer>
                <Image
                  alt={friend.name}
                  src={friend.image}
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </S.FriendImageContainer>
              <S.FriendName variant="body-text-small-normal">
                {friend.name}
              </S.FriendName>
            </S.Friend>
          </Link>
        ))}
      </S.FriendContainer>

      <TotalFriend
        visible={modalVisible}
        onClose={handleCloseModal}
        friends={friends}
        totalFriends={friends.length}
      /> */}
    </S.Wrapper>
  );
}

export default ListFriend;
