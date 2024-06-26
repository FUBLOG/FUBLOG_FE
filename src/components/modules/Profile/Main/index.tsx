"use client";
import useFriend from "@/hooks/useFriend";
import { useEffect } from "react";
import Banner from "../Banner";
import Introduce from "../introduce";
import PostProfile from "../PostProfile";
import { useAuth } from "@/hooks/useAuthStatus";
import { Spin } from "antd";
import * as S from "./styles";
import ListFriend from "../ListFriend";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetProfile } from "@/hooks/useProfile";

const Profile = () => {
  // const pathName = usePathname();
  // console.log(pathName);

  const searchParams = useSearchParams();
  const profileHash = searchParams.get("pId");

  // if (pathName !== "/profile") {
  //   const router = useRouter();
  //   router.replace(`/profile?pId=${profileHash}`);
  // }
  const { loading } = useAuth();
  const { checkFriend } = useFriend(profileHash);
  const { profileSearch } = useGetProfile(profileHash);

  useEffect(() => {
    profileSearch;
    if (!loading) {
      checkFriend();
    }
  }, [profileHash, loading]);

  return (
    <S.HomeWrapper>
      <Spin spinning={loading} fullscreen />
      <Banner profileHash={profileHash} />
      <S.Main>
        <S.Sidebar>
          <Introduce />
          <ListFriend />
        </S.Sidebar>
        <S.Content>
          <PostProfile />
        </S.Content>
      </S.Main>
    </S.HomeWrapper>
  );
};

export default Profile;
