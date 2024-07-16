import React, { useEffect, useState } from "react";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";
import useFriend from "@/hooks/useFriend";
import { useGetProfile } from "@/hooks/useProfile";
import {
  acceptFriendRequest,
  rejectFriendRequest,
  sendFriendRequest,
  unfriend,
  unsentFriend,
} from "@/services/api/friend";
import ModalGuest from "../../ModalGuest";
import ButtonFriend from "../../ButtonFriend";
import NotFound from "../../NotFound/main";
import UpdateProfile from "../Update";
import useThemeStore from "@/hooks/useTheme";

const Banner = ({ profileHash, setLoading }: any) => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const {
    isFriend,
    isGuest,
    isMyUser,
    isRequester,
    isSendFriend,
    setIsFriend,
    setIsSendFriend,
    resetStatus,
    isNotFound,
    loading,
    checkFriend,
  } = useFriend(profileHash);
  const {
    MyUser,
    FriendButton,
    RequesterButton,
    SendFriendButton,
    GuestButton,
    DefaultButton,
  } = ButtonFriend();
  const [showModalGuest, setShowModalGuest] = useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const handleCancel = () => {
    setShowModalGuest(false);
    setShowUpdateProfile(false);
    document.body.style.overflow = 'auto'; 
  };

  const { profileSearch, getUserInfo } = useGetProfile(profileHash);

  const handleProfileUpdate = () => {
    getUserInfo(profileHash); // Gọi lại API để lấy thông tin mới nhất
  };

  const handleDisplayButton = () => {
    if (isMyUser) return <MyUser onClick={() => { setShowUpdateProfile(true); document.body.style.overflow = 'hidden'; }} />;
    if (isFriend) return <FriendButton handleFriend={handleFriend} />;
    if (isRequester) return <RequesterButton handleFriend={handleFriend} />;
    if (isSendFriend) return <SendFriendButton handleFriend={handleFriend} />;
    if (isGuest) return <GuestButton setShowModalGuest={setShowModalGuest} />;
    return <DefaultButton handleFriend={handleFriend} />;
  };

  useEffect(() => {
    setLoading(true);
    const updateInfor = async () => {
      await checkFriend();
      handleDisplayButton();
    };
    updateInfor();
    setLoading(false);
  }, [profileSearch, isFriend, isGuest, isMyUser, isRequester, isSendFriend]);

  const handleFriend = async (event: string): Promise<void> => {
    switch (event) {
      case "addFriend":
        await sendFriendRequest(profileSearch?.user?._id);
        resetStatus();
        setIsSendFriend(true);
        break;
      case "unfriend":
        await unfriend(profileSearch?.user?._id);
        resetStatus();
        setIsSendFriend(false);
        break;
      case "decline":
        await rejectFriendRequest(profileSearch?.user?._id);
        resetStatus();
        setIsSendFriend(false);
        break;
      case "accept":
        await acceptFriendRequest(profileSearch?.user?._id);
        resetStatus();
        setIsFriend(true);
        break;
      case "unsent":
        await unsentFriend(profileSearch?.user?._id);
        resetStatus();
        setIsFriend(false);
        break;
      default:
        break;
    }
    checkFriend();
  };

  return !isNotFound ? (
    <S.Wrapper>
      <ModalGuest showModalGuest={showModalGuest} handleCancel={handleCancel} />
      <UpdateProfile 
        visible={showUpdateProfile} 
        handleCancel={handleCancel} 
        onProfileUpdate={handleProfileUpdate} // Truyền callback
      />
      <S.CoverImage src={profileSearch?.info?.cover_photo} />
      <S.BannerUser>
        <S.BoxUser>
          <S.Avatar>
            <S.UserAvatar src={profileSearch?.info?.avatar} />
          </S.Avatar>
          <S.Typography>
            <Typography
              variant="body-text-small-bold"
              color={darkMode ? "#B9B4C7" : "#352F44"}
              fontSize="34px"
            >
              {profileSearch?.user?.displayName}
            </Typography>
            <Typography
              variant="body-text-small-normal"
              color={darkMode ? "#B9B4C7" : "#352F44"}
              fontSize="14px"
            >
              {profileSearch?.info?.bio}
            </Typography>
          </S.Typography>
        </S.BoxUser>
        <S.ButtonUser>{handleDisplayButton()}</S.ButtonUser>
      </S.BannerUser>
    </S.Wrapper>
  ) : (
    loading && <S.Wrapper> <NotFound /></S.Wrapper>
  );
};

export default Banner;
