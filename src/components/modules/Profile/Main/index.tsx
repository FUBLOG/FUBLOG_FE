"use client";
import useFriend from "@/hooks/useFriend";
import { useEffect, useState } from "react";
import Banner from "../Banner";
import Introduce from "../Introduce";
import PostProfile from "../PostProfile";
import { useAuth } from "@/hooks/useAuthStatus";
import { Spin } from "antd";
import * as S from "./styles";
import ListFriend from "../ListFriend";
import { useSearchParams } from "next/navigation";

const Profile = () => {
  const searchParams = useSearchParams();
  const profileHash = searchParams.get("pId");
  const [loading, setLoading] = useState<boolean>(true);
  const { checkFriend } = useFriend(profileHash);
  const [friends, setFriend] = useState<[{}]>([
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
    <S.HomeWrapper>
      <Spin spinning={loading} fullscreen />
      <Banner profileHash={profileHash} setLoading={setLoading} />
      <S.Main>
        <S.Sidebar>
          <Introduce />
          <ListFriend
            profileHash={profileHash}
            friends={friends}
            setFriend={setFriend}
            setLoading={setLoading}
          />
        </S.Sidebar>
        <S.Content>
          <PostProfile />
        </S.Content>
      </S.Main>
    </S.HomeWrapper>
  );
};

export default Profile;
