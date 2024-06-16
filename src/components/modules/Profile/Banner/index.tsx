import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import * as S from "./styles";
import useFriend from "@/hooks/useFriend";
import { useEffect, useState } from "react";
import { useProfileContext } from "@/contexts/ProfileContext";

export default function Banner({
  profileHash,
}: {
  readonly profileHash: string;
}) {
  const {
    isFriend,
    isGuest,
    isMyUser,
    sendFriend,
    isSendFriend,
    unFriend,
    loading,
    declineFriend,
  } = useFriend();
  const { profileInfo } = useProfileContext();
  useEffect(() => {}, [profileHash, isFriend]);
  const handleFriend = (event: string) => {
    if (event === "addFriend") {
      sendFriend(profileInfo?.user?._id);
    }
    if (event === "unfriend") {
      unFriend(profileInfo?.user?._id);
    }
    if (event === "revoke") {
      // unFriend(profileInfo?.user?._id);
    }
    if (event === "decline") {
      declineFriend(profileInfo?.user?._id);
    }
  };
  return (
    <S.Wrapper>
      <S.CoverImage src={"/images/Profile/CoverPhoto.jpg"} />
      <S.BannerUser>
        <S.BoxUser>
          <S.Avatar>
            <S.UserAvatar src={""} />
          </S.Avatar>
          <S.Typography>
            <Typography variant="h2" color="#FAF0E6 !important">
              {profileHash}
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
                loading={loading}
                color="#352f44"
                $hoverColor="#faf0e6"
              />
            </>
          ) : isMyUser ? (
            <Button
              type="default"
              loading={loading}
              children={"Chỉnh sửa"}
              $width="100px"
              $backgroundColor="#FAF0E6"
              color="#352f44"
              $hoverColor="#faf0e6"
            />
          ) : isSendFriend ? (
            <Button
              type="default"
              children={"Hủy lời mời"}
              loading={loading}
              onClick={() => {
                handleFriend("unfriend");
              }}
              $width="120px"
              $backgroundColor="#FAF0E6"
              color="#352f44"
              $hoverColor="#faf0e6"
            />
          ) : (
            <Button
              type="default"
              children={"Thêm bạn bè"}
              loading={loading}
              onClick={() => {
                handleFriend("addFriend");
              }}
              $width="120px"
              $backgroundColor="#FAF0E6"
              color="#352f44"
              $hoverColor="#faf0e6"
            />
          )}
        </S.ButtonUser>
      </S.BannerUser>
    </S.Wrapper>
  );
}
