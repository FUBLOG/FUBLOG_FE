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
  const [deleted,setDeleted] = useState(false)
  const [newRole, setNewRole] = useState(role); // State mới để lưu giữ giá trị mới của role
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null); // Khởi tạo biến state timeoutId
  const[finished,setFinished] = useState(false);
  const deleteFriend = () => {
    const id = setTimeout(() => {
      setDeleted(true);
      setFinished(true);
      setTimeout(() => {
        setNewRole("Stranger");
      }, 2000);
       // Cập nhật giá trị mới cho role
    }, 2000);
    setIsFriend(false);
    setTimeoutId(id); // Lưu ID của timeout vào biến state
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
    setIsFriend(true);
    setDeleted(false);
    if (timeoutId) {
      clearTimeout(timeoutId); // Hủy timeout nếu tồn tại
    }
  };

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
      {newRole === "Friend" ? (
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
              Hủy kết bạn
            </Button>
          )}
          {finished  && <span>Đã hủy kết bạn</span>}
          {!deleted && !isFriend && (
            <Button
              type="primary"
              $color="#352F44"
              $backgroundColor="#fff"
              $hoverBackgroundColor="#ccc"
              $hoverColor="#000  "
              $width={"120px"}
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
              $width={"120px"}
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
              $width={"120px"}
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
