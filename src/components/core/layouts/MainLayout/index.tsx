"use client";
import { useState, ReactNode, useEffect } from "react";
import { Flex, Modal, Input,Menu,Dropdown } from "antd";
import Image from "next/image";
import {
  HomeOutlined,
  SearchOutlined,
  EditOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
  CaretDownOutlined,
  PictureOutlined,
  SendOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { constants } from "@/settings";
import { jwtDecode } from "jwt-decode";

import Button from "../../common/Button";

import webStorageClient from "@/utils/webStorageClient";

import logo from "@/public/logo.png";
import * as S from "./styles";

interface LayoutProps {
  readonly children: ReactNode;
}
import Chat from "@/components/modules/Chat";

interface LayoutProps {
  readonly children: ReactNode;
}
interface LayoutProps {
  readonly children: ReactNode;
  readonly isGuestPage?: boolean;
}

function MainLayout({ children }: LayoutProps) {
  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleOpenMessageModal = () => {
    setShowMessageModal(true);
  };

  const handleCloseMessageModal = () => {
    setShowMessageModal(false);
  };

  const [isGuest, setIsGuest] = useState(true);
  useEffect(() => {
    const token = webStorageClient.getToken();
    console.log(token);

    if (token) {
      webStorageClient.set(constants.IS_AUTH, true);
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
    } else {
      webStorageClient.set(constants.IS_AUTH, false);
    }
    setIsGuest(!webStorageClient.get(constants.IS_AUTH));
  }, []);
  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.GlobalStyle />
        <S.Container>
          <Image src={logo} alt="logo header" />
          <S.IconContainer>
            <a href="/home">
              <HomeOutlined style={{ fontSize: "22px" }} />
            </a>
            <SearchOutlined style={{ fontSize: "22px" }} />
            <EditOutlined style={{ fontSize: "22px" }} />
            <MessageOutlined
              style={{ fontSize: "22px" }}
              onClick={handleOpenMessageModal}
            />
            <BellOutlined style={{ fontSize: "22px" }} />
          </S.IconContainer>
          {isGuest ? (
            <Flex gap={15} style={{ marginRight: "20px" }}>
              <a href="/sign-in">
                <Button type="default" $width="100px">
                  Đăng nhập
                </Button>
              </a>
              <a href="/sign-up">
                <Button color="red" type="primary" $width="100px">
                  Đăng ký
                </Button>
              </a>
            </Flex>
          ) : (
            <S.UserIconContainer>
              <a href="/profile">
                <UserOutlined style={{ fontSize: "28px" }} />
              </a>
              <Dropdown overlay={menuItems} trigger={["click"]}>
                <CaretDownOutlined
                  style={{ fontSize: "18px", marginLeft: "0px", cursor: "pointer" }}
                />
              </Dropdown>
            </S.UserIconContainer>
          )}
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
      <MessageModal
        visible={showMessageModal}
        onClose={handleCloseMessageModal}
      />
    </S.LayoutWrapper>
  );
}

export default MainLayout;
