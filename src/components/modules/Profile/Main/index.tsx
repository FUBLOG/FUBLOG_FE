"use client";
import useFriend from "@/hooks/useFriend";
import { useGetProfile } from "@/hooks/useProfile";
import { useEffect } from "react";
import Banner from "../Banner";
import { Spin } from "antd";

import * as S from "./styles";
import { useUser } from "@/hooks/useUser";
function Profile({ profileHash }: { readonly profileHash: string }) {
  const { loading: profileLoading } = useGetProfile(profileHash);
  const { isAuthLoading } = useUser();
  const { checkFriend } = useFriend();

  useEffect(() => {
    if (!isAuthLoading) {
      checkFriend();
    }
  }, [profileHash, isAuthLoading]);

  return profileLoading || isAuthLoading ? (
    <Spin size="large" />
  ) : (
    <S.HomeWrapper>
      <Banner />
    </S.HomeWrapper>
  );
}

export default Profile;
