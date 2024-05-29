"use client";

import Banner from "../Banner";
import Post from "../Post";
import ListFriend from "../ListFriend";

import * as S from "./styles";

function Profile() {
  return (
    <S.HomeWrapper>
      <Banner />
      <S.Container>
        <S.Main>
          <ListFriend />
          <Post />
        </S.Main>
      </S.Container>
    </S.HomeWrapper>
  );
}

export default Profile;
