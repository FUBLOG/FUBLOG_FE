"use client";

import * as S from "./styles";
import Banner from "../Banner";
import Post from "../Post";
import ListFriend from "../ListFriend";
function Profile() {
  return (
    <S.HomeWrapper>
      <S.Container>
        <Banner />
        <S.Main>
          <ListFriend />
          <Post />
        </S.Main>
      </S.Container>
    </S.HomeWrapper>
  );
}

export default Profile;
