import React, { useState } from "react";
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
  const {
    isFriend,
    isBlocked,
    isGuest,
    isMyUser,
    isRequester,
    isSendFriend,
    loading,
    setIsFriend,
  } = useFriend();
  const handleFriend = (event: string) => {
    switch (event) {
      case "addFriend":
        break;
      case "unfriend":
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
        <S.ButtonUser>
          {isGuest ? (
            <></>
          ) : isFriend && !isMyUser ? (
            <>
              <Button
                type="default"
                children={"Hủy kết bạn"}
                onClick={() => {
                  handleFriend("unfriend");
                }}
                $width="100px"
                $backgroundColor="#FAF0E6"
                loading={loading}
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
            </>
          ) : isMyUser ? (
            <></>
          ) : isRequester ? (
            <>
              <Button
                type="default"
                children={"Chấp nhận"}
                onClick={() => {
                  handleFriend("accept");
                }}
                $width="100px"
                $backgroundColor="#FAF0E6"
                loading={loading}
                color="#352f44"
                $hoverColor="#faf0e6"
              />
              <Button
                type="default"
                children={"Từ chối"}
                onClick={() => {
                  handleFriend("decline");
                }}
                $width="100px"
                $backgroundColor="#FAF0E6"
                loading={loading}
                color="#352f44"
                $hoverColor="#faf0e6"
              />
            </>
          ) : isSendFriend ? (
            <Button
              type="default"
              children={"Đã gửi lời mời"}
              $backgroundColor="#FAF0E6"
              $width="100px"
              color="#352f44"
              $hoverColor="#faf0e6"
            />
          ) : (
            <Button
              type="default"
              children={"Kết bạn"}
              onClick={() => {
                handleFriend("addFriend");
              }}
              $width="100px"
              $backgroundColor="#FAF0E6"
              loading={loading}
              color="#352f44"
              $hoverColor="#faf0e6"
            />
          )}
        </S.ButtonUser>
      </S.BannerUser>
    </S.Wrapper>
  );
};
export default Banner;
