"use client";
import useFriend from "@/hooks/useFriend";
import { useEffect } from "react";
import Banner from "../Banner";
import { useAuth } from "@/hooks/useAuthStatus";
import { Spin } from "antd";

import * as S from "./styles";
function Profile({ profileHash }: { readonly profileHash: string }) {
  const { loading } = useAuth();
  const { checkFriend } = useFriend();

  useEffect(() => {
    if (!loading) {
      checkFriend();
    }
  }, [profileHash, loading]);

  return (
    <Spin size="large" spinning={loading}>
      <S.HomeWrapper>
        <Banner />
      </S.HomeWrapper>
    </Spin>
  );
}

export default Profile;
