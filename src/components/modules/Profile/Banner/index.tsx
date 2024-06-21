import React, { useEffect, useState } from "react";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import * as S from "./styles";
import useFriend from "@/hooks/useFriend";
import { useProfile } from "@/hooks/useProfile";
import {
  acceptFriendRequest,
  rejectFriendRequest,
  sendFriendRequest,
  unfriend,
} from "@/services/api/friend";
import { Skeleton } from "antd";

const Banner: React.FC = () => {
  const { profile } = useProfile();
  const {
    isFriend,
    isGuest,
    isMyUser,
    isRequester,
    isSendFriend,
    setIsFriend,
    loading,
    setIsSendFriend,
    resetStatus,
  } = useFriend();
  const handleDisplayButton = () => {
    if (isMyUser) return <MyUser handleFriend={handleFriend} />;
    if (isFriend) return <FriendButton handleFriend={handleFriend} />;
    if (isRequester) return <RequesterButton handleFriend={handleFriend} />;
    if (isSendFriend) return <SendFriendButton handleFriend={handleFriend} />;
    return <DefaultButton handleFriend={handleFriend} />;
  };
  useEffect(() => {
    handleDisplayButton();
  }, [profile, isFriend, isGuest, isMyUser, isRequester, isSendFriend]);

  const handleFriend = async (event: string): Promise<void> => {
    switch (event) {
      case "addFriend":
        await sendFriendRequest(profile?.user?._id);
        resetStatus();
        setIsSendFriend(true);
        break;
      case "unfriend":
        await unfriend(profile?.user?._id);
        resetStatus();
        console.log("unfriend");
        break;
      case "decline":
        await rejectFriendRequest(profile?.user?._id);
        resetStatus();
        break;
      case "accept":
        await acceptFriendRequest(profile?.user?._id);
        resetStatus();
        setIsFriend(true);
        break;

      case "recall":
        resetStatus();
        setIsFriend(false);
        break;

      default:
        break;
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <S.Wrapper>
      <S.CoverImage />
      <S.BannerUser>
        <S.BoxUser>
          <S.Avatar>
            <S.UserAvatar src={profile?.info?.avatar} />
          </S.Avatar>
          <S.Typography>
            <Typography variant="h2" color="#FAF0E6 !important">
              {profile?.user?.displayName}
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
  );
};
const Loading = () => <Skeleton active round avatar paragraph />;

interface ButtonProps {
  handleFriend: Function;
}
const MyUser: React.FC<ButtonProps> = ({ handleFriend }: ButtonProps) => {
  return (
    <Button
      type="default"
      children={"Chỉnh sửa"}
      onClick={() => {}}
      $width="100px"
      $backgroundColor="#FAF0E6"
      color="#352f44"
      $hoverColor="#faf0e6"
    />
  );
};
const SendFriendButton: React.FC<ButtonProps> = ({
  handleFriend,
}: ButtonProps) => {
  return (
    <Button
      type="default"
      $backgroundColor="#FAF0E6"
      onClick={() => {
        handleFriend("recall");
      }}
      $width="100px"
      color="#352f44"
      $hoverColor="#faf0e6"
    >
      Hủy lời mời
    </Button>
  );
};

const RequesterButton: React.FC<ButtonProps> = ({
  handleFriend,
}: ButtonProps) => {
  return (
    <>
      <Button
        type="default"
        onClick={() => {
          handleFriend("accept");
        }}
        $width="100px"
        $backgroundColor="#FAF0E6"
        color="#352f44"
        $hoverColor="#faf0e6"
      >
        Chấp nhận
      </Button>
      <Button
        type="default"
        onClick={() => {
          handleFriend("decline");
        }}
        $width="100px"
        $backgroundColor="#FAF0E6"
        color="#352f44"
        $hoverColor="#faf0e6"
      >
        Từ chối
      </Button>
    </>
  );
};

const DefaultButton: React.FC<ButtonProps> = ({
  handleFriend,
}: ButtonProps) => {
  return (
    <Button
      type="default"
      onClick={() => {
        handleFriend("addFriend");
      }}
      $width="100px"
      $backgroundColor="#FAF0E6"
      color="#352f44"
      $hoverColor="#faf0e6"
    >
      Thêm bạn bè
    </Button>
  );
};

const FriendButton: React.FC<ButtonProps> = ({ handleFriend }: ButtonProps) => {
  return (
    <>
      <Button
        type="default"
        onClick={() => {
          handleFriend("unfriend");
        }}
        $width="100px"
        $backgroundColor="#FAF0E6"
        color="#352f44"
        $hoverColor="#faf0e6"
      >
        Hủy kết bạn
      </Button>
      <Button
        type="default"
        onClick={() => {
          handleFriend("chat");
        }}
        $width="100px"
        $backgroundColor="#FAF0E6"
        color="#352f44"
        $hoverColor="#faf0e6"
      >
        Nhắn tin
      </Button>
    </>
  );
};

export default Banner;
