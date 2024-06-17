import Button from "@/components/core/common/Button";
import React, { Dispatch, SetStateAction, useState } from "react";

import Image from "next/legacy/image";
import * as S from "./style";
import useFriend from "@/api/Friend/useFriend";
import ModalGuest from "../../ModalGuest";

interface SearchUserProp {
  name: string;
  friends: number;
  avatar: string;
  role: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setShowModalGuest: Dispatch<SetStateAction<boolean>>;
}

export const SearchUser: React.FC<SearchUserProp> = ({
  setShowModalGuest,
  name,
  friends,
  avatar,
  role,
  setValue,
}) => {
  const {
    isFriend,
    isGuest,
    isMyUser,
    sendFriend,
    isSendFriend,
    unFriend,
    loading,
    isRequester,
    declineFriend,
    acceptFriend,
    setIsFriend,
  } = useFriend();
  const [sendRequest, setSendRequest] = useState(false);
  const [requestCancel, setRequestCancel] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [finished, setFinished] = useState(false);
  const handleFriend = (event: string) => {
    if (event === "addFriend") {
      sendFriend();
    }

    if (event === "unfriend") {
      setDeleted(true);
      setFinished(true);

      unFriend();
    }
    if (event === "revoke") {
      // unFriend(profileInfo?.user?._id);
    }
    if (event === "decline") {
      declineFriend();
    }
    if (event === "accept") {
      acceptFriend();
    }
  };
  const deleteFriend = () => {
    const id = setTimeout(() => {
      setDeleted(true);
      setFinished(true);
    }, 2000);
    setIsFriend(false);
    setTimeoutId(id);
  };

  const handleFriendRequest = () => {
    setSendRequest(true);
    setTimeout(() => {
      setRequestCancel(true);
    }, 2000);
  };

  const handleCancel = () => {
    setSendRequest(false);
    setRequestCancel(false);
  };

  const handleDeleteFriend = () => {
    // setIsFriend(true);
    setDeleted(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
  // {finished && <span>Đã hủy kết bạn</span>}

  // {sendRequest && !requestCancel && <span>Đã gửi lời mời</span>}

  return (
    <S.Usersearch>
      <div className="user-wrapper">
        <div className="image-wrapper">
          <Image src="" width={40} height={40} />
        </div>

        <div className="des">
          <p>{name}</p>
          <span>{friends} bạn bè</span>
        </div>
      </div>
      {
        isGuest ? (
          <Button
            type="primary"
            children={"Thêm bạn bè"}
            $color="#352F44"
            $backgroundColor="#fff"
            $hoverBackgroundColor="#ccc"
            $hoverColor="#000"
            $width={"120px"}
            onClick={() => setShowModalGuest(true)}
          />
        ) : isFriend && !isMyUser ? (
          <>
            <Button
              type="primary"
              children={"Hủy kết bạn"}
              onClick={() => {
                handleFriend("unfriend");
              }}
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
          </>
        ) : isMyUser ? (
          <Button
            type="primary"
            loading={loading}
            children={"Chỉnh sửa"}
            $width="120px"
            $backgroundColor="#fff"
            $color="#352F44"
            $hoverBackgroundColor="#ccc"
            $hoverColor="#000"
          />
        ) : isSendFriend ? (
          <Button
            type="primary"
            children={"Hủy lời mời"}
            loading={loading}
            onClick={() => {
              handleFriend("unfriend");
            }}
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
              children={"Chấp nhận lời mời"}
              loading={loading}
              onClick={() => {
                handleFriend("accept");
              }}
              $width="120px"
              $backgroundColor="#fff"
              $color="#352F44"
              $hoverBackgroundColor="#ccc"
              $hoverColor="#000"
            />
            <Button
              type="primary"
              children={"Từ chối lời mời"}
              $color="#352F44"
              $backgroundColor="#fff"
              $hoverBackgroundColor="#ccc"
              $hoverColor="#000"
              $width="120px"
              loading={loading}
              onClick={() => {
                handleFriend("decline");
              }}
            />
          </S.ButtonWrap>
        ) : (
          <Button
            type="primary"
            children={"Thêm bạn bè"}
            $color="#352F44"
            $backgroundColor="#fff"
            $hoverBackgroundColor="#ccc"
            $hoverColor="#000"
            $width={"120px"}
            onClick={handleCancel}
          />
        )

        // <Button
        //   // type="primary"
        //   // children={"Thêm bạn bè"}
        //   // loading={loading}
        //   // onClick={() => {
        //   //   handleFriend("addFriend");
        //   // }}
        //   // $width="120px"
        //   // $backgroundColor="#fff  "
        //   // $color="#352F44"
        //   // $hoverBackgroundColor="#ccc"
        //   // $hoverColor="#000"
        //   type="primary"
        //   $color="#352F44"
        //   $backgroundColor="#fff "
        //   $hoverColor="#000 "
        //   $width={"120px"}
        //   // onClick={handleDeleteFriend}
        // />
      }
    </S.Usersearch>
  );
};
