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
    loading,
    setIsSendFriend,
    resetStatus,
    isNotFound,
  } = useFriend(profileHash);
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
  };

  return !isNotFound ? (
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
    <S.Wrapper>404</S.Wrapper>
  );
};
const Loading = () => <Skeleton active round avatar paragraph />;

interface ButtonProps {
  handleFriend: Function;
}
const MyUser = () => {
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
        handleFriend("unsent");
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

const GuestButton: React.FC<{
  setShowModalGuest: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowModalGuest }) => {
  return (
    <Button
      type="default"
      onClick={() => setShowModalGuest(true)}
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
