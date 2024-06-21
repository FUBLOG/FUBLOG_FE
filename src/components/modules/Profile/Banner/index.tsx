import React, { useEffect, useState } from "react";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import * as S from "./styles";
import useFriend from "@/hooks/useFriend";
import { useProfile } from "@/hooks/useProfile";

const Banner: React.FC = () => {

  const { profile } = useProfile();
  const {
    isFriend,
    isGuest,
    isMyUser,
    isRequester,
    isSendFriend,
  } = useFriend();
  const handleDisplayButton = () => {
    if (isGuest) return <></>
    if (isMyUser) return <>Xử lý là tôi</>
    if (isFriend) return <FriendButton handleFriend={handleFriend} />
    if (isRequester) return <RequesterButton handleFriend={handleFriend} />
    if (isSendFriend) return <SendFriendButton handleFriend={handleFriend} />
  }
  useEffect(() => {
    handleDisplayButton()
  }, [profile]);

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
        <S.ButtonUser>
          {
            handleDisplayButton()
          }
        </S.ButtonUser>
      </S.BannerUser>
    </S.Wrapper>
  );
};

interface ButtonProps {
  handleFriend: Function;
}

const SendFriendButton: React.FC<ButtonProps> = ({ handleFriend }: ButtonProps) => {
  return (<Button
    type="default"
    $backgroundColor="#FAF0E6"
    $width="100px"
    color="#352f44"
    $hoverColor="#faf0e6"
  >
    Đã gửi lời mời
  </Button>)

}

const RequesterButton: React.FC<ButtonProps> = ({ handleFriend }: ButtonProps) => {
  return (<>
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
    </Button></>)
}

const DefaultButton: React.FC<ButtonProps> = ({ handleFriend }: ButtonProps) => {
  return (<Button
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
  </Button>)
}

const FriendButton: React.FC<ButtonProps> = ({ handleFriend }: ButtonProps) => {
  return (<>
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
  </>)
}

export default Banner;
