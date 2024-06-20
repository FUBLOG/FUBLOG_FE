"use client";

import { useGetProfile, useProfile } from "@/hooks/useProfile";
import Banner from "../Banner";
import * as S from "./styles";
import { useEffect } from "react";

function Profile({ profileHash }: { readonly profileHash: string }) {
  const { profile } = useGetProfile(profileHash);
  const { setProfile } = useProfile();
  useEffect(() => {
    return () => setProfile(null);
  }, []);
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
