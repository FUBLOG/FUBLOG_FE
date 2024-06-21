"use client";

import { useGetProfile, useProfile } from "@/hooks/useProfile";
import Banner from "../Banner";
import * as S from "./styles";
import { useEffect } from "react";
import useFriend from "@/hooks/useFriend";

function Profile({ profileHash }: { readonly profileHash: string }) {
  const { profile } = useGetProfile(profileHash);

  const { checkFriend } = useFriend();
  useEffect(() => {
    profile;
    checkFriend();
  }, [profileHash]);
  return (
    <S.HomeWrapper>
      <Banner />
      {/* <S.Container>
        <S.Main>
          <ListFriend />
          <PostProfile />
        </S.Main>
      </S.Container> */}
    </S.HomeWrapper>
  );
}

export default Profile;
