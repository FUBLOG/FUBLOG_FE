import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/core/common/Button";
import * as S from "./style";
import useFriend from "@/hooks/useFriend";
import { Skeleton } from "antd";

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
  const {
    isFriend,
    isGuest,
    sendFriend,
    unFriend,
    isSendFriend,
    declineFriend,
    acceptFriend,
    loading,
    isRequester,
  } = useFriend(profileHash);

  const handleFriend = (event: string) => {
    switch (event) {
      case "addFriend":
        sendFriend();
        break;
      case "unfriend":
        unFriend();
        break;
      case "decline":
        declineFriend();
        break;
      case "accept":
        acceptFriend();
        break;
      default:
        break;
    }
  };

  const handleProfileClick = () => {
    setValue("");
    setSearchVisible(false);
  };

  const Loading = () => <Skeleton active round avatar paragraph />;

  return loading ? (
    <Loading />
  ) : (
    <S.Usersearch>
      <div className="user-wrapper">
        <Link href={`/profile/${profileHash}`} passHref>
          <div className="image-wrapper" onClick={handleProfileClick}>
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
