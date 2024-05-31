"use client";

import Banner from "../Banner";
import ListFriend from "../ListFriend";
import PostProfile from "../PostProfile";

import * as S from "./styles";

function Profile() {
  const isGuest = false;
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
