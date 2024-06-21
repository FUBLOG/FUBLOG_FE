"use client";

import { useGetProfile, useProfile } from "@/hooks/useProfile";
import Banner from "../Banner";
import * as S from "./styles";
import { useEffect } from "react";
import useFriend from "@/hooks/useFriend";
import { Spin } from "antd";

function Profile({ profileHash }: { readonly profileHash: string }) {
  useGetProfile(profileHash);
  const { loading } = useGetProfile(profileHash);
  const { checkFriend } = useFriend();
  useEffect(() => {
    checkFriend();
  }, [profileHash]);
  return loading ? (
    <Spin size="large" />
  ) : (
    <S.HomeWrapper>
      <Banner />
    </S.HomeWrapper>
  );
}

export default Profile;
