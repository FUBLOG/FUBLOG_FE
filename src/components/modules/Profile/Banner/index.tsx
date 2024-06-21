import React, { useEffect, useState } from "react";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import * as S from "./styles";
import useFriend from "@/hooks/useFriend";
import { Card, Skeleton } from "antd";
import { useProfile } from "@/hooks/useProfile";
import { useAuthContext } from "@/contexts/AuthContext";
import { sendFriendRequest } from "@/services/api/friend";

const Banner: React.FC = () => {
  const { profile } = useProfile();
  const { isFriend, isGuest, isMyUser, isRequester, isSendFriend } =
    useFriend();
  const handleDisplayButton = () => {
    if (isGuest)
      return (
        <>
          là guest
          <DefaultButton handleFriend={handleFriend} />
        </>
      );
    if (isMyUser) return <MyUser handleFriend={handleFriend} />;
    if (isFriend) return <FriendButton handleFriend={handleFriend} />;
    if (isRequester) return <RequesterButton handleFriend={handleFriend} />;
    if (isSendFriend) return <SendFriendButton handleFriend={handleFriend} />;
  };
  useEffect(() => {
    handleDisplayButton();
  }, [profile, isFriend, isGuest, isMyUser, isRequester, isSendFriend]);

  const handleFriend = (event: string): void => {
    switch (event) {
      case "addFriend":
        break;
      case "unfriend":
        console.log("unfriend");
        break;
      case "decline":
        break;
      case "accept":
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
      children={"Hủy lời mời"}
      onClick={() => {}}
      $width="100px"
      $backgroundColor="#FAF0E6"
      color="#352f44"
      $hoverColor="#faf0e6"
    />
  );
};

const RequesterButton: React.FC<ButtonProps> = ({
  handleFriend,
}: ButtonProps) => {
  return (
    <S.ButtonWrap>
      <Button
        type="default"
        children={"Chấp nhận lời mời"}
        onClick={() => {}}
        $width="120px"
        $backgroundColor="#FAF0E6"
        color="#352f44"
        $hoverColor="#faf0e6"
      />

      <Button
        type="default"
        children={"Từ chối lời mời"}
        onClick={() => {
          handleFriend("decline");
        }}
        $width="120px"
        $backgroundColor="#FAF0E6"
        color="#352f44"
        $hoverColor="#faf0e6"
      />
    </S.ButtonWrap>
  );
};

const DefaultButton: React.FC<ButtonProps> = ({
  handleFriend,
}: ButtonProps) => {
  return (
    <Button
      type="default"
      children={"Kết bạn"}
      onClick={() => {
        handleFriend("accept");
      }}
      $width="100px"
      $backgroundColor="#FAF0E6"
      color="#352f44"
      $hoverColor="#faf0e6"
    />
  );
};

const FriendButton: React.FC<ButtonProps> = ({ handleFriend }: ButtonProps) => {
  return (
    <S.ButtonWrap>
      <Button
        type="default"
        children={"Hủy kết bạn"}
        onClick={() => {
          handleFriend("unfriend");
        }}
        $width="100px"
        $backgroundColor="#FAF0E6"
        color="#352f44"
        $hoverColor="#faf0e6"
      />
      <Button
        type="default"
        children={"Nhắn tin"}
        $backgroundColor="#FAF0E6"
        $width="100px"
        color="#352f44"
        $hoverColor="#faf0e6"
      />
    </S.ButtonWrap>
  );
};

export default Banner;
