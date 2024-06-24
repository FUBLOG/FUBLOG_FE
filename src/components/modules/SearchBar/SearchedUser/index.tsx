import React, { useEffect, useState } from "react";
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
import ButtonFriend from "../../ButtonFriend";

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
  const [buttonDisplay, setButton] = useState<any>(<></>);
  const [loadingSusses, setLoadingSusscess] = useState(true);
  const {
    isFriend,
    isGuest,
    isRequester,
    isSendFriend,
    setIsFriend,
    loading,
    setIsSendFriend,
    resetStatus,
    checkFriend,
  } = useFriend(profileHash);
  const {
    FriendButton,
    RequesterButton,
    SendFriendButton,
    GuestButton,
    DefaultButton,
  } = ButtonFriend();
  const handleDisplayButton = () => {
    if (isFriend) return <FriendButton handleFriend={handleFriend} />;
    if (isGuest) return <GuestButton setShowModalGuest={setShowModalGuest} />;
    if (isRequester) return <RequesterButton handleFriend={handleFriend} />;
    if (isSendFriend) return <SendFriendButton handleFriend={handleFriend} />;
    return <DefaultButton handleFriend={handleFriend} />;
  };
  useEffect(() => {
    if (!loading) {
      setLoadingSusscess(true);
      const a = handleDisplayButton();
      setButton(a);
      setLoadingSusscess(false);
    }
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
    checkFriend();
  };

  const Loading = () => <Skeleton active round avatar paragraph />;

  return loadingSusses ? (
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
      <S.ButtonUser>{buttonDisplay}</S.ButtonUser>
    </S.Usersearch>
  );
};
