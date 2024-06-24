import React, { useState, useEffect, useRef } from "react";
import { Modal, Input, Badge, Skeleton } from "antd";
import {
  SearchOutlined,
  PictureOutlined,
  SendOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import Message from "./Message";
import FriendOnline from "./FriendOnline";
import { useAuthContext } from "@/contexts/AuthContext";
import FriendList from "./FriendList";

interface PageProps {
  readonly visible: boolean;
  readonly onClose: () => void;
}

const Chat = ({ visible, onClose }: PageProps) => {
  const { userInfo } = useAuthContext();
  console.log(userInfo);

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
            <Input
              placeholder="Tìm kiếm"
              prefix={<SearchOutlined />}
              style={{ backgroundColor: "#FAF0E6", borderColor: "#5C5470" }}
            />
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
