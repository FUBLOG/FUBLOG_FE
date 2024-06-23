import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/core/common/Button";
import * as S from "./style";
import useFriend from "@/hooks/useFriend";
import {
  acceptFriendRequest,
  rejectFriendRequest,
  sendFriendRequest,
  unfriend,
  unsentFriend,
} from "@/services/api/friend";
import { Skeleton } from "antd";
import { useGetProfile } from "@/hooks/useProfile";

interface SearchUserProp {
  name: string;
  friends: number;
  id: string;
  avatar: string;
  profileHash: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setShowModalGuest: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}

export const SearchUser: React.FC<SearchUserProp> = ({
  name,
  friends,
  avatar,
  profileHash,
  handleClose,
  id,
  setShowModalGuest,
}) => {
  const { profileSearch } = useGetProfile(profileHash);

  const {
    isFriend,
    isGuest,
    isRequester,
    isSendFriend,
    setIsFriend,
    loading,
    setIsSendFriend,
    resetStatus,
  } = useFriend(profileHash);
  const handleDisplayButton = () => {
    if (isFriend) return <FriendButton handleFriend={handleFriend} />;
    if (isGuest) return <GuestButton setShowModalGuest={setShowModalGuest} />;
    if (isRequester) return <RequesterButton handleFriend={handleFriend} />;
    if (isSendFriend) return <SendFriendButton handleFriend={handleFriend} />;
    return <DefaultButton handleFriend={handleFriend} />;
  };
  useEffect(() => {
    handleDisplayButton();
  }, [profileSearch, isFriend, isGuest, isRequester, isSendFriend]);

  const handleFriend = async (event: string): Promise<void> => {
    switch (event) {
      case "addFriend":
        await sendFriendRequest(id);
        resetStatus();
        setIsSendFriend(true);
        break;
      case "unfriend":
        await unfriend(id);
        resetStatus();
        console.log("unfriend");
        break;
      case "decline":
        await rejectFriendRequest(id);
        resetStatus();
        break;
      case "accept":
        await acceptFriendRequest(id);
        resetStatus();
        setIsFriend(true);
        break;

      case "unsent":
        await unsentFriend(id);
        resetStatus();
        setIsFriend(false);
        break;

      default:
        break;
    }
  };

  const Loading = () => <Skeleton active round avatar paragraph />;

  return loading ? (
    <Loading />
  ) : (
    <S.Usersearch>
      <div className="user-wrapper">
        <Link href={`/profile/${profileHash}`} onClick={handleClose} passHref>
          <div className="image-wrapper">
            <Image src={avatar} width={40} height={40} alt={name} />
          </div>
        </Link>
        <div className="des">
          <p>{name}</p>
          <span>{friends} bạn bè</span>
        </div>
      </div>
      <S.ButtonUser>{handleDisplayButton()}</S.ButtonUser>
    </S.Usersearch>
  );
};
interface ButtonProps {
  handleFriend: Function;
}

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
