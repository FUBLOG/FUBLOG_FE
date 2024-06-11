import Button from "@/components/core/common/Button";
import React, { useState } from "react";

import Image from "next/legacy/image";
import { UserAddOutlined } from "@ant-design/icons";
import { Usersearch } from "./style";

interface SearchUserProp {
  name: string;
  friends: number;
  avatar: string;
  role: string;
}

export const SearchUser: React.FC<SearchUserProp> = ({
  name,
  friends,
  avatar,
  role,
}) => {
  const [sendRequest, setSendRequest] = useState(false);
  const [requestCancel, setRequestCancel] = useState(false);
  const [isFriend, setIsFriend] = useState(true);
  const [deleteCancle,setDeleteCancle] = useState(false)
  
  const deleteFriend = () =>{
    setIsFriend(false);
    setTimeout(() => {
      setDeleteCancle(true);
    }, 2000);
  }
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
  const handleDeleteFriend = ()=>{
    setIsFriend(true);
    setDeleteCancle(false);
  }
  return (
    <Usersearch>
      <div className="user-wrapper">
        <div className="image-wrapper">
          <Image src="" width={40} height={40} />
        </div>

        <div className="des">
          <p>{name}</p>
          <span>{friends} bạn bè</span>
        </div>
      </div>
      {role === "Friend" ? (
        <>
          {isFriend && (
            <Button
              type="primary"
              $color="#352F44"
              $backgroundColor="#fff"
              $hoverBackgroundColor="#ccc"
              $hoverColor="#000  "
              $width={"120px"}
              onClick={deleteFriend}
            >
              <UserAddOutlined />
              Hủy Kết bạn
            </Button>
          )}
          {!isFriend && !deleteCancle && <span>Đã hủy kết bạn</span>}
          {deleteCancle && (
            <Button
              type="primary"
              $color="#352F44"
              $backgroundColor="#fff"
              $hoverBackgroundColor="#ccc"
              $hoverColor="#000  "
              $width={"84px"}
              onClick={handleDeleteFriend}
            >
              Hoàn tác
            </Button>
          )}
        </>
      ) : (
        <>
          {!sendRequest && (
            <Button
              type="primary"
              $color="#352F44"
              $backgroundColor="#fff"
              $hoverBackgroundColor="#ccc"
              $hoverColor="#000"
              $width={"84px"}
              onClick={handleFriendRequest}
            >
              <UserAddOutlined />
              Kết bạn
            </Button>
          )}
          {sendRequest && !requestCancel && <span>Đã gửi lời mời</span>}
          {requestCancel && (
            <Button
              type="primary"
              $color="#352F44"
              $backgroundColor="#fff"
              $hoverBackgroundColor="#ccc"
              $hoverColor="#000"
              $width={"84px"}
              onClick={handleCancel}
            >
              Hủy lời mời
            </Button>
          )}
        </>
      )}
    </Usersearch>
  );
};
