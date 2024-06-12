"use client";
import { useState, ReactNode, useEffect } from "react";
import { Flex, Menu, Dropdown } from "antd";
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

import SearchContent from "../../../modules/SearchBar/Main";

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
  const [valueSearch, setValueSearch] = useState("");

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
      console.log("token ", token);

      if (token) {
        const res: any = await getRequest(authEndpoint.AUTH_TOKEN, {
          security: true,
        });
        webStorageClient.set(constants.IS_AUTH, true);

        setIsGuest(false);
        return;
      } else {
        setIsGuest(true);
        webStorageClient.set(constants.IS_AUTH, false);

        return;
      }
    };
    isValidUser();
  }, []);
  useEffect(() => {
    const isValidUser = async () => {
      const token = await webStorageClient.getToken();
      console.log("token ", token);

      if (token) {
        const res: any = await getRequest(authEndpoint.AUTH_TOKEN, {
          security: true,
        });
        webStorageClient.set(constants.IS_AUTH, true);

        setIsGuest(false);
        return;
      } else {
        setIsGuest(true);
        webStorageClient.set(constants.IS_AUTH, false);

        return;
      }
    };
    isValidUser();
  }, []);
  const User = () => {
    return isGuest ? (
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
        <Link href="/profile" onClick={() => handleSetNavigation("")}>
          <UserOutlined style={{ fontSize: "28px" }} />
        </Link>
        <Dropdown overlay={menuItems} trigger={["click"]}>
          <CaretDownOutlined
            style={{
              fontSize: "18px",
              marginLeft: "0px",
              cursor: "pointer",
            }}
          />
        </Dropdown>
      </S.UserIconContainer>
    );
  };

  const [searchVisible, setSearchVisible] = useState(false);
  const showSearchModal = () => {
    setSearchVisible(true);
  };

  const handleOk = () => {
    setSearchVisible(true);
  };
  const handleCancle = () => {
    setSearchVisible(false);
    setNav("home");
    setValueSearch("");
  };
  const menuItems = (
    <S.CustomMenu>
      <Menu.Item key="viewProfile" className="custom-menu-item">
        <a href="/profile">Xem trang cá nhân</a>
      </Menu.Item>
      <Menu.Item key="editProfile" className="custom-menu-item">
        <a href="/profile/edit">Chỉnh sửa trang cá nhân</a>
      </Menu.Item>
      <Menu.Item key="logout" className="custom-menu-item">
        <a href="/logout">Đăng xuất</a>
      </Menu.Item>
    </S.CustomMenu>
  );

  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.GlobalStyle />
        <S.Container>
          <Image src={logo} alt="logo header" />
          <S.IconContainer>
            <Link href="/home" onClick={() => handleSetNavigation("home")}>
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
            <Link href="" onClick={() => handleSetNavigation("create")}>
              {nav === "create" ? (
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
            <User />
          </S.IconContainer>
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
      <Chat visible={showMessageModal} onClose={handleCloseMessageModal} />
      <S.SearchModal
        open={searchVisible}
        onOk={handleOk}
        onCancel={handleCancle}
        className="searchModal"
        footer={null}
      >
        <SearchContent value={valueSearch} setValue={setValueSearch} />
      </S.SearchModal>
    </S.LayoutWrapper>
  );
}

export default MainLayout;
