import React, { useEffect, useState } from "react";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import * as S from "./styles";
import useFriend from "@/hooks/useFriend";
import { useGetProfile, useProfile } from "@/hooks/useProfile";
import {
  acceptFriendRequest,
  rejectFriendRequest,
  sendFriendRequest,
  unfriend,
  unsentFriend,
} from "@/services/api/friend";
import { Skeleton } from "antd";
import ModalGuest from "../../ModalGuest";
import ButtonFriend from "../../ButtonFriend";

interface BannerProps {
  profileHash: string;
}

const Banner: React.FC<BannerProps> = ({ profileHash }) => {
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
  const handleCancel = () => {
    setShowModalGuest(false);
  };
  const { profileSearch } = useGetProfile(profileHash);
  const handleDisplayButton = () => {
    if (isMyUser) return <MyUser />;
    if (isFriend) return <FriendButton handleFriend={handleFriend} />;
    if (isRequester) return <RequesterButton handleFriend={handleFriend} />;
    if (isSendFriend) return <SendFriendButton handleFriend={handleFriend} />;
    if (isGuest) return <GuestButton setShowModalGuest={setShowModalGuest} />;
    return <DefaultButton handleFriend={handleFriend} />;
  };
  useEffect(() => {
    handleDisplayButton();
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
        console.log("unfriend");
        break;
      case "decline":
        await rejectFriendRequest(profileSearch?.user?._id);
        resetStatus();
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

  return loading ? (
    <Loading />
  ) : !isNotFound ? (
    <S.Wrapper>
      <ModalGuest showModalGuest={showModalGuest} handleCancel={handleCancel} />
      <S.CoverImage />
      <S.BannerUser>
        <S.BoxUser>
          <S.Avatar>
            <S.UserAvatar src={profileSearch?.info?.avatar} />
          </S.Avatar>
          <S.Typography>
            <Typography variant="h2" color="#FAF0E6 !important">
              {profileSearch?.user?.displayName}
            </Typography>
            <Typography
              variant="caption-small"
              color="#FAF0E6 !important"
              fontSize="12px"
            >
              Tôi là một người ...
            </Typography>
          </S.Typography>
        </S.BoxUser>
        <S.ButtonUser>{handleDisplayButton()}</S.ButtonUser>
      </S.BannerUser>
    </S.Wrapper>
  ) : (
    loading && <S.Wrapper>404</S.Wrapper>
  );
};
const Loading = () => <Skeleton active round avatar paragraph />;

export default Banner;
