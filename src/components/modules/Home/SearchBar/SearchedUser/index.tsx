import Button from "@/components/core/common/Button";
import React, { useState } from "react";

import Image from "next/legacy/image";
import { UserAddOutlined } from "@ant-design/icons";
import { Usersearch } from "./style";

interface SearchUserProp{
    name: string,
    friends: number,
    avatar: string
}

export const SearchUser:React.FC<SearchUserProp> = ({ name, friends, avatar }) => {
  const [addFriend, setAddFriend] = useState(false);
  const handleFriend = () => {
    setAddFriend(true);
  };
  

  return (
    <Usersearch >
      <div className="user-wrapper">
        <div className="image-wrapper">
          <Image src="" width={40} height={40} />
        </div>

        <div className="des">
          <p>{name}</p>
          <span>{friends} bạn bè</span>
        </div>
      </div>
      {!addFriend ? (
        <Button
          type="primary"
          $color="#352F44"
          $backgroundColor="#fff"
          $hoverBackgroundColor="#ccc"
          $hoverColor="#000  "
          $width={"84px"}
          onClick={handleFriend}
        >
          <UserAddOutlined />
          Kết Bạn
        </Button>
      ) : (
        <div>Đã gửi lời mời</div>
      )}
    </Usersearch>
  );
};
