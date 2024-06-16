"use client";

import Banner from "../Banner";
import ListFriend from "../ListFriend";
import PostProfile from "../PostProfile";

import * as S from "./styles";

function Profile({ profileHash }: { readonly profileHash: string }) {
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
