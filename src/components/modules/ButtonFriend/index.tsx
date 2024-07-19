import Button from "@/components/core/common/Button";
import useThemeStore from "@/hooks/useTheme";
import React from "react";

interface ButtonProps {
  handleFriend?: Function;
  onClick?: () => void;
}

const ButtonFriend = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const MyUser: React.FC<ButtonProps> = ({ onClick }) => {
    return (
      <Button
        type="default"
        onClick={onClick}
        $width="110px"
        $color={darkMode? "#fff" : "#352f44"}
        $hoverColor={darkMode? "#000" : "#fff"}
        $borderColor={darkMode? "#fff" : "#352f44"}
        $hoverBackgroundColor={darkMode? "#F7D600" : "#000"}
      >
        Chỉnh sửa
      </Button>
    );
  };

  const SendFriendButton: React.FC<ButtonProps> = ({ handleFriend }) => {
    return (
      <Button
        type="default"
        $backgroundColor="#FAF0E6"
        onClick={() => {
          handleFriend && handleFriend("unsent");
        }}
        $width="110px"
        $color={darkMode? "#fff" : "#352f44"}
        $hoverColor={darkMode? "#000" : "#fff"}
        $borderColor={darkMode? "#fff" : "#352f44"}
        $hoverBackgroundColor={darkMode? "#F7D600" : "#000"}
      >
        Hủy lời mời
      </Button>
    );
  };

  const RequesterButton: React.FC<ButtonProps> = ({ handleFriend }) => {
    return (
      <>
        <Button
          type="default"
          onClick={() => {
            handleFriend && handleFriend("accept");
          }}
          $width="110px"
          $color={darkMode? "#fff" : "#352f44"}
          $hoverColor={darkMode? "#000" : "#fff"}
          $borderColor={darkMode? "#fff" : "#352f44"}
          $hoverBackgroundColor={darkMode? "#F7D600" : "#000"}
        >
          Chấp nhận
        </Button>
        <Button
          type="default"
          onClick={() => {
            handleFriend && handleFriend("decline");
          }}
          $width="110px"
          $color={darkMode? "#fff" : "#352f44"}
          $hoverColor={darkMode? "#000" : "#fff"}
          $borderColor={darkMode? "#fff" : "#352f44"}
          $hoverBackgroundColor={darkMode? "#F7D600" : "#000"}
        >
          Từ chối
        </Button>
      </>
    );
  };

  const DefaultButton: React.FC<ButtonProps> = ({ handleFriend }) => {
    return (
      <Button
        type="default"
        onClick={() => {
          handleFriend && handleFriend("addFriend");
        }}
        $width="110px"
        $color={darkMode? "#fff" : "#352f44"}
        $hoverColor={darkMode? "#000" : "#fff"}
        $borderColor={darkMode? "#fff" : "#352f44"}
        $hoverBackgroundColor={darkMode? "#F7D600" : "#000"}
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
        $width="110px"
        $color={darkMode? "#fff" : "#000"}
        $hoverColor={darkMode? "#000" : "#fff"}
        $borderColor={darkMode? "#fff" : "#000"}
        $hoverBackgroundColor={darkMode? "#F7D600" : "#000"}
        $backgroundColor={darkMode? "#000" : "#fff"}
        
      >
        Thêm bạn bè
      </Button>
    );
  };

  const FriendButton: React.FC<ButtonProps> = ({ handleFriend }) => {
    return (
      <>
        <Button
          type="default"
          onClick={() => {
            handleFriend && handleFriend("unfriend");
          }}
          $width="110px"
          $color={darkMode? "#fff" : "#000"}
          $hoverColor={darkMode? "#000" : "#fff"}
          $borderColor={darkMode? "#fff" : "#000"}
          $hoverBackgroundColor={darkMode? "#F7D600" : "#000"}
          $backgroundColor={darkMode? "#000" : "#fff"}

          
        >
          Hủy kết bạn
        </Button>
        <Button
          type="default"
          onClick={() => {
            handleFriend && handleFriend("chat");
          }}
          
          $width="110px"
          $color={darkMode? "#fff" : "#000"}
          $hoverColor={darkMode? "#000" : "#fff"}
          $borderColor={darkMode? "#fff" : "#000"}
          $hoverBackgroundColor={darkMode? "#F7D600" : "#000"}
          $backgroundColor={darkMode? "#000" : "#fff"}
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
