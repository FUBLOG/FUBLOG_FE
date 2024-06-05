"use client";

import webStorageClient from "@/utils/webStorageClient";
import Banner from "../Banner";
import ListFriend from "../ListFriend";
import PostProfile from "../PostProfile";

import * as S from "./styles";
import { constants } from "@/settings";
import { useEffect, useState } from "react";

function Profile() {
  const [isGuest, setIsGuest] = useState(true);
  useEffect(() => {
    setIsGuest(!webStorageClient.get(constants.IS_AUTH));
  });
  return (
    <S.HomeWrapper>
      <Banner />
      <S.Container>
        <S.Main>
          <ListFriend isGuest={isGuest} />
          <PostProfile />
        </S.Main>
      </S.Container>
    </S.HomeWrapper>
  );
}

export default Profile;
