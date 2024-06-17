"use client";

import Banner from "../Banner";
import ListFriend from "../ListFriend";
import PostProfile from "../PostProfile";
import { useProfile } from "@/hooks/useProfile";
import { useEffect } from "react";

import * as S from "./styles";

function Profile({ profileHash }: { readonly profileHash: string }) {
  const { getUserInfo } = useProfile();
  useEffect(() => {
    getUserInfo(profileHash);
  }, [profileHash]);
  return (
    <S.HomeWrapper>
      <Banner profileHash={profileHash} />
      <S.Container>
        <S.Main>
          <ListFriend />
          <PostProfile />
        </S.Main>
      </S.Container>
    </S.HomeWrapper>
  );
}

export default Profile;
