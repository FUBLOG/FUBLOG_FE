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

const Banner: React.FC = () => {
  const { profile } = useProfile();
  const { isFriend, isGuest, isMyUser, isRequester, isSendFriend } =
    useFriend();
  console.log("profile", profile);

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

  const handleFriend = (event: string): void => {
    switch (event) {
      case "addFriend":
        sendFriendRequest(profile?.user?._id);
        break;
      case "unfriend":
        unfriend(profile?.user?._id);
        console.log("unfriend");
        break;
      case "decline":
        rejectFriendRequest(profile?.user?._id);
        break;
      case "accept":
        acceptFriendRequest(profile?.user?._id);

        break;
      default:
        break;
    }
  };

  return (
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
        handleFriend();
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
      Kết bạn
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
