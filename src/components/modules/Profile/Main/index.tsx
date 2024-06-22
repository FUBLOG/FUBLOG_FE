"use client";
import useFriend from "@/hooks/useFriend";
import { useEffect } from "react";
import Banner from "../Banner";
import { useAuth } from "@/hooks/useAuthStatus";
import { Spin } from "antd";

import * as S from "./styles";
import { useGetProfile, useProfile } from "@/hooks/useProfile";
function Profile({ profileHash }: { readonly profileHash: string }) {
  useGetProfile(profileHash);

  const { loading } = useAuth();
  const { checkFriend } = useFriend();
  useEffect(() => {
    if (!loading) {
      checkFriend();
    }
  }, [profileHash, loading]);

  return (
    <S.HomeWrapper>
      <Banner />
    </S.HomeWrapper>
  );
}

export default Profile;
