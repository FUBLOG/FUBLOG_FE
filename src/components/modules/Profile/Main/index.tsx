"use client";
import useFriend from "@/hooks/useFriend";
import { useEffect } from "react";
import Banner from "../Banner";
import { useAuth } from "@/hooks/useAuthStatus";
import { Spin } from "antd";

import * as S from "./styles";
import { useGetProfile, useProfile } from "@/hooks/useProfile";
interface ProfileProps {
  profileHash: string;
}
const Profile: React.FC<ProfileProps> = ({ profileHash }) => {
  useGetProfile(profileHash);

  const { loading } = useAuth();
  const { checkFriend } = useFriend(profileHash);
  useEffect(() => {
    if (!loading) {
      checkFriend();
    }
  }, [profileHash, loading]);

  return (
    <S.HomeWrapper>
      <Spin spinning={loading} fullscreen />

      <Banner profileHash={profileHash} />
    </S.HomeWrapper>
  );
};

export default Profile;
