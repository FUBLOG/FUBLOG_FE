import React, { useEffect } from "react";
import { Modal } from "antd";
import {
  SearchOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import Message from "./Message";
import FriendOnline from "./FriendOnline";
import { useAuthContext } from "@/contexts/AuthContext";
import FriendList from "./ConversationList";
import SearchChat from "./Search";

interface PageProps {
  readonly visible: boolean;
  readonly onClose: () => void;
}

const Chat = ({ visible, onClose }: PageProps) => {
  const { userInfo } = useAuthContext();
  useEffect(() => { }, [userInfo?._id]);
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      destroyOnClose={true}
      footer={null}
      width={800}
      styles={{ body: { backgroundColor: "#FAF0E6", padding: 0 } }}
      closable={false}
    >
      <S.ModalContainer>
        <S.CloseButton onClick={onClose}>
          <CloseOutlined />
        </S.CloseButton>
        <S.Sidebar>
          <S.Profile>
            <S.ProfileImage src={userInfo?.userInfo?.avatar} alt="Profile" />
            <S.ProfileName>{userInfo?.displayName}</S.ProfileName>
          </S.Profile>
          <S.SearchBar>
            <SearchChat />
          </S.SearchBar>
          <S.FriendList>
            <FriendList />
          </S.FriendList>
        </S.Sidebar>
        <S.ChatArea>
          <FriendOnline />
          <Message />
        </S.ChatArea>
      </S.ModalContainer>
    </Modal>
  );
};

export default Chat;
