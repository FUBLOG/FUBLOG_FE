"use client";

import Banner from "../Banner";
import ListFriend from "../ListFriend";
import PostProfile from "../PostProfile";

import * as S from "./styles";
import { useAuthContext } from "@/contexts/AuthContext";

function Profile({ profileHash }: { profileHash: string }) {
  const { userInfo } = useAuthContext();
  return (
    <>
      {userInfo?.userId ? (
        <>
          <S.HomeWrapper>
            <Banner profileHash={profileHash} />
            <S.Container>
              <S.Main>
                <ListFriend />
                <PostProfile />
              </S.Main>
            </S.Container>
          </S.HomeWrapper>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Profile;
