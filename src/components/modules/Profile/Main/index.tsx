"use client";
import useFriend from "@/hooks/useFriend";
import { useEffect, useState } from "react";
import Banner from "../Banner";

import PostProfile from "../PostProfile";
import { Spin } from "antd";
import * as S from "./styles";
import ListFriend from "../ListFriend";
import { useSearchParams } from "next/navigation";
import { useGetProfile } from "@/hooks/useProfile";
import useThemeStore from "@/hooks/useTheme";
import Introduce from "../Introduce";

const Profile = () => {
  const searchParams = useSearchParams();
  const profileHash = searchParams.get("pId");
  const [loading, setLoading] = useState<boolean>(true);
  const { checkFriend } = useFriend(profileHash);
  const [friends, setFriend] = useState<Array<object>>([]);
  const { profileSearch } = useGetProfile(profileHash);

  const darkMode = useThemeStore((state) => state.darkMode);
  useEffect(() => {
    setLoading(true);
    const checkIsFriend = async () => {
      await checkFriend();
    };

    checkIsFriend();
    setFriend([
      {
        _id: "",
        displayName: "",
        firstName: "",
        lastName: "",
        profileHash: "",
        userInfo: {
          avatar: "",
          user_id: "",
          _id: "",
        },
      },
    ]);
    setLoading(false);
  }, [profileHash]);

  return (
    <S.HomeWrapper className={darkMode ? "theme-dark" : "theme-light"}>
      <Spin spinning={loading} fullscreen />
      <Banner profileHash={profileHash} setLoading={setLoading} />
      <S.Main>
        <S.Container>
          <S.Sidebar className={darkMode ? "theme-dark" : "theme-light"}>
            <Introduce />
            <ListFriend
              profileHash={profileHash}
              friends={friends}
              setFriend={setFriend}
              setLoading={setLoading}
            />
          </S.Sidebar>
          <S.Content>
            <PostProfile
              profileHash={profileHash}
              profileSearch={profileSearch}
            />
          </S.Content>
        </S.Container>
      </S.Main>
    </S.HomeWrapper>
  );
};

export default Profile;
