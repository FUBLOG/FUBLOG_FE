"use client";

import Banner from "../Banner";
import ListFriend from "../ListFriend";
import PostProfile from "../PostProfile";

import * as S from "./styles";

function Profile() {
  return (
    <S.HomeWrapper>
      <Banner />
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
