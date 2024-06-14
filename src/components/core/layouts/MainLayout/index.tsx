"use client";
import { useState, ReactNode } from "react";
import { Flex,Menu,Dropdown } from "antd";
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

import Button from "../../common/Button";

import logo from "@/public/logo.png";

import SearchContent from "../../../modules/SearchBar/Main";

import * as S from "./styles";

interface LayoutProps {
  readonly children: ReactNode;
}
import Chat from "@/components/modules/Chat";
import { useAuth } from "@/hooks/useAuthStatus";

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
  const { userInfo } = useAuth();

 

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
     
          </S.IconContainer>
          
          {userInfo === null ? (
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
                style={{ fontSize: "18px", marginLeft: "0px", cursor: "pointer" }}
              />
            </Dropdown>
          </S.UserIconContainer>
          )}
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
