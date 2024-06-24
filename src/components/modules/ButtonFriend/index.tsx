import Button from "@/components/core/common/Button";
import React from "react";

const ButtonFriend = () => {
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

  const FriendButton: React.FC<ButtonProps> = ({
    handleFriend,
  }: ButtonProps) => {
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
  return {
    MyUser,
    SendFriendButton,
    RequesterButton,
    DefaultButton,
    GuestButton,
    FriendButton,
  };
};

export default ButtonFriend;
