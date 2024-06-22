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
import { useAuthContext } from "@/contexts/AuthContext";

interface SearchUserProp {
  name: string;
  friends: number;
  id: string;
  avatar: string;
  profileHash: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setShowModalGuest: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchUser: React.FC<SearchUserProp> = ({
  name,
  friends,
  avatar,
  profileHash,
  setValue,
  setShowModalGuest,
  setSearchVisible,
}) => {
  const profile = getUserInfo(profileHash);
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
  } = useFriend();
  const { loading } = useAuthContext();

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

      case "unsent":
        await unsentFriend(profile?.user?._id);
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
        <Link href={`/profile/${profileHash}`} passHref>
          <div className="image-wrapper">
            <Image src={avatar} width={40} height={40} alt={name} />
          </div>
        </Link>
        <div className="des">
          <p>{name}</p>
          <span>{friends} bạn bè</span>
        </div>
      </div>
      {isGuest ? (
        <Button
          type="primary"
          children={"Thêm bạn bè"}
          $color="#352F44"
          $backgroundColor="#fff"
          $hoverBackgroundColor="#ccc"
          $hoverColor="#000"
          $width={"120px"}
          onClick={() => setShowModalGuest(true)}
        />
      ) : isFriend ? (
        <S.ButtonWrap>
          <Button
            type="primary"
            children={"Hủy kết bạn"}
            onClick={() => handleFriend("unfriend")}
            $width="120px"
            $backgroundColor="#fff"
            loading={loading}
            $color="#352F44"
            $hoverBackgroundColor="#ccc"
            $hoverColor="#000"
          />
          <Button
            type="primary"
            children={"Nhắn tin"}
            $backgroundColor="#fff"
            $width="120px"
            loading={loading}
            $color="#352F44"
            $hoverBackgroundColor="#ccc"
            $hoverColor="#000"
          />
        </S.ButtonWrap>
      ) : isSendFriend ? (
        <Button
          type="primary"
          children={"Hủy lời mời"}
          loading={loading}
          $width="120px"
          $backgroundColor="#fff"
          $color="#352F44"
          $hoverBackgroundColor="#ccc"
          $hoverColor="#000"
        />
      ) : isRequester ? (
        <S.ButtonWrap>
          <Button
            type="primary"
            children={"Chấp nhận lời mời"}
            loading={loading}
            onClick={() => handleFriend("accept")}
            $width="120px"
            $backgroundColor="#fff"
            $color="#352F44"
            $hoverBackgroundColor="#ccc"
            $hoverColor="#000"
          />
          <Button
            type="primary"
            children={"Từ chối lời mời"}
            loading={loading}
            onClick={() => handleFriend("decline")}
            $width="120px"
            $backgroundColor="#fff"
            $color="#352F44"
            $hoverBackgroundColor="#ccc"
            $hoverColor="#000"
          />
        </S.ButtonWrap>
      ) : (
        <Button
          type="primary"
          children={"Thêm bạn bè"}
          loading={loading}
          onClick={() => handleFriend("addFriend")}
          $width="120px"
          $backgroundColor="#fff"
          $color="#352F44"
          $hoverBackgroundColor="#ccc"
          $hoverColor="#000"
        />
      )}
    </S.Usersearch>
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
function getUserInfo(profileHash: string) {
  throw new Error("Function not implemented.");
}
