"use client";
import { useState, ReactNode, useEffect } from "react";
import { Flex } from "antd";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  HomeOutlined,
  SearchOutlined,
  EditOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
  CaretDownOutlined,
  MessageFilled,
  HomeFilled,
  EditFilled,
  BellFilled,
} from "@ant-design/icons";
import { constants } from "@/settings";

import Button from "../../common/Button";

import webStorageClient from "@/utils/webStorageClient";

import logo from "@/public/logo.png";

import SearchContent from "../../../modules/Home/SearchBar";

import * as S from "./styles";

interface LayoutProps {
  readonly children: ReactNode;
}
import Chat from "@/components/modules/Chat";
import { getRequest } from "@/services/request";
import { authEndpoint } from "@/services/endpoint";

interface LayoutProps {
  readonly children: ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [nav, setNav] = useState("home");
  const handleOpenMessageModal = () => {
    setShowMessageModal(true);
    setNav("mess");
  };

  const handleCloseMessageModal = () => {
    setShowMessageModal(false);
    setNav("home");
  };

  const handleSetNavigation = (e: string) => {
    setNav(e);
  };

  const [isGuest, setIsGuest] = useState(true);
  useEffect(() => {
    const isValidUser = async () => {
      const token = await webStorageClient.getToken();
      console.log(token);

      if (token) {
        const res: any = await getRequest(authEndpoint.AUTH_TOKEN, {
          security: true,
        }).then((response) => {
          return true;
        });
      }
      return false;
    };
    const isValid = isValidUser();
    if (isValid) {
      setIsGuest(!isValid);
      webStorageClient.set(constants.IS_AUTH, true);
    } else {
      webStorageClient.set(constants.IS_AUTH, false);
    }
  }, []);
  const [searchVisible, setSearchVisible] = useState(false);
  const showSearchModal = () => {
    setSearchVisible(true);
  };

  const handleOk = () => {
    setSearchVisible(true);
  };
  const handleCancle = () => {
    setSearchVisible(false);
  };

  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.GlobalStyle />
        <S.Container>
          <Image src={logo} alt="logo header" />
          <S.IconContainer>
            <Link href="/home" onClick={(e) => handleSetNavigation("home")}>
              {nav === "home" ? (
                <HomeFilled style={{ fontSize: "22px" }} />
              ) : (
                <HomeOutlined style={{ fontSize: "22px" }} />
              )}
            </Link>
            <Link href="" onClick={() => handleSetNavigation("search")}>
              {nav === "search" ? (
                <FontAwesomeIcon
                  style={{ fontSize: "22px" }}
                  icon={faMagnifyingGlass}
                />
              ) : (
                <SearchOutlined
                  onClick={showSearchModal}
                  style={{ fontSize: "22px" }}
                />
              )}
            </Link>
            <Link href="" onClick={() => handleSetNavigation("edit")}>
              {nav === "edit" ? (
                <EditFilled style={{ fontSize: "22px" }} />
              ) : (
                <EditOutlined style={{ fontSize: "22px" }} />
              )}
            </Link>
            <Button type="text" onClick={handleOpenMessageModal}>
              {nav === "mess" ? (
                <MessageFilled style={{ fontSize: "22px" }} />
              ) : (
                <MessageOutlined style={{ fontSize: "22px" }} />
              )}
            </Button>
            <Button type="text" onClick={() => handleSetNavigation("bell")}>
              {nav === "bell" ? (
                <BellFilled style={{ fontSize: "22px" }} />
              ) : (
                <BellOutlined style={{ fontSize: "22px" }} />
              )}
            </Button>
          </S.IconContainer>
          {isGuest ? (
            <Flex gap={15} style={{ marginRight: "20px" }}>
              <Link href="/sign-in">
                <Button type="default" $width="100px">
                  Đăng nhập
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button color="red" type="primary" $width="100px">
                  Đăng ký
                </Button>
              </Link>
            </Flex>
          ) : (
            <S.UserIconContainer>
              <Link href="/profile">
                <UserOutlined style={{ fontSize: "28px" }} />
              </Link>
              <CaretDownOutlined
                style={{ fontSize: "18px", marginLeft: "4px" }}
              />
            </S.UserIconContainer>
          )}
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
      <Chat visible={showMessageModal} onClose={handleCloseMessageModal} />
      <SearchOutlined onClick={showSearchModal} style={{ fontSize: "22px" }} />
      <S.SearchModal
        open={searchVisible}
        onOk={handleOk}
        onCancel={handleCancle}
        className="searchModal"
        footer={null}
      >
        <SearchContent onPressEnter={handleCancle} />
      </S.SearchModal>
    </S.LayoutWrapper>
  );
}

export default MainLayout;
