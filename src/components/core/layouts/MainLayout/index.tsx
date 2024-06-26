"use client";

import { useState, ReactNode, useEffect } from "react";
import { Flex, Menu, Dropdown, Spin } from "antd";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
import NotificationModal from "@/components/modules/NotificationModal";

import * as S from "./styles";

interface LayoutProps {
  readonly children: ReactNode;
}
import Chat from "@/components/modules/Chat";
import { useAuth } from "@/hooks/useAuthStatus";
import { useAuthContext } from "@/contexts/AuthContext";
import ModalGuest from "@/components/modules/ModalGuest";
import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ProfileRequestResponseList } from "@/model/response";
import { CreateContent } from "@/components/modules/CreatePost";

interface LayoutProps {
  readonly children: ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [list, setList] = useState<ProfileRequestResponseList["metadata"]>([]);

  const [nav, setNav] = useState("home");
  const [valueSearch, setValueSearch] = useState("");
  const [bellVisible, setBellVisible] = useState(false);
  const { logout, loading } = useAuth();
  const { userInfo } = useAuthContext();
  const [showModalGuest, setShowModalGuest] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    if (webStorageClient.get(constants.IS_AUTH)) {
      handleCancel();
    }
  }, [webStorageClient.get(constants.IS_AUTH)]);

  const handleSetNavigation = (e: string) => {
    setNav(e);
    if (e !== "home" && e !== "search" && userInfo?._id === "") {
      setShowModalGuest(true);
    }
    if (e === "search") {
      setSearchVisible(true);
    }
    if (e === "mess" && userInfo?._id !== "") {
      setShowMessageModal(true);
    }
    if (e === "bell" && userInfo?._id !== "") {
      setBellVisible(true);
    }
    if (e === "create" && userInfo?._id !== "") {
      setShowCreate(true);
    }
  };
  const handleCreatePostSuccess = () => {
    setShowCreate(false); // Ẩn modal CreateContent khi tạo bài viết thành công
  };
  const showBellModal = () => {
    if (userInfo?._id !== "") {
      setNav("bell");
      setBellVisible(true);
    } else {
      setShowModalGuest(true);
    }
  };

  const handleBellClose = () => {
    setBellVisible(false);
    setNav("home");
  };

  const handleOk = () => {
    setSearchVisible(true);
  };

  const handleCancel = () => {
    setShowCreate(false);
    setSearchVisible(false);
    setShowMessageModal(false);
    setShowModalGuest(false);
    setBellVisible(false);
    setNav("home");
    setList([]);
    setValueSearch("");
  };

  const menuItems = (
    <S.CustomMenu>
      <Menu.Item key="viewProfile" className="custom-menu-item">
        <Link href={`/profile/${userInfo?.profileHash}`}>
          Xem trang cá nhân
        </Link>
      </Menu.Item>
      <Menu.Item key="editProfile" className="custom-menu-item">
        <Link href="/profile/edit">Chỉnh sửa trang cá nhân</Link>
      </Menu.Item>
      <Menu.Item
        key="logout"
        className="custom-menu-item"
        onClick={() => logout()}
      >
        <button style={{ all: "unset", cursor: "pointer" }}>
          {loading ? <Spin size="small" /> : "Đăng xuất"}
        </button>
      </Menu.Item>
    </S.CustomMenu>
  );

  return (
    <S.LayoutWrapper>
      <ModalGuest showModalGuest={showModalGuest} handleCancel={handleCancel} />
      <S.Header>
        <S.GlobalStyle />
        <S.Container>
          <Image src={logo} alt="logo header" />
          <S.IconContainer>
            <Link href="/" onClick={() => handleSetNavigation("home")}>
              {nav === "home" ? (
                <HomeFilled style={{ fontSize: "22px" }} />
              ) : (
                <HomeOutlined style={{ fontSize: "22px" }} />
              )}
            </Link>
            <Link href="#" onClick={() => handleSetNavigation("search")}>
              {nav === "search" ? (
                <FontAwesomeIcon
                  style={{ fontSize: "22px" }}
                  icon={faMagnifyingGlass}
                />
              ) : (
                <SearchOutlined style={{ fontSize: "22px" }} />
              )}
            </Link>
            <Link href="#" onClick={() => handleSetNavigation("create")}>
              {nav === "create" ? (
                <EditFilled style={{ fontSize: "22px" }} />
              ) : (
                <EditOutlined style={{ fontSize: "22px" }} />
              )}
            </Link>
            <Button type="text" onClick={() => handleSetNavigation("mess")}>
              {nav === "mess" ? (
                <MessageFilled style={{ fontSize: "22px" }} />
              ) : (
                <MessageOutlined style={{ fontSize: "22px" }} />
              )}
            </Button>
            <Link href="#" onClick={showBellModal}>
              {nav === "bell" ? (
                <BellFilled style={{ fontSize: "22px" }} />
              ) : (
                <BellOutlined style={{ fontSize: "22px" }} />
              )}
            </Link>
          </S.IconContainer>
          {userInfo?._id === "" ? (
            <Flex gap={15} style={{ marginRight: "20px" }}>
              <Link href="/sign-in">
                <Button type="default" $width="100px" disabled={loading}>
                  Đăng nhập
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button
                  color="red"
                  type="primary"
                  $width="100px"
                  disabled={loading}
                >
                  Đăng ký
                </Button>
              </Link>
            </Flex>
          ) : (
            <S.UserIconContainer>
              <Link href={`/profile/${userInfo?.profileHash}`}>
                <UserOutlined
                  style={{ fontSize: "28px" }}
                  onClick={() => handleSetNavigation("")}
                />
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
          )}
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>

      <NotificationModal visible={bellVisible} onClose={handleBellClose} />
      <Chat visible={showMessageModal} onClose={handleCancel} />
      <S.SearchModal
        open={searchVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="searchModal"
        footer={null}
      >
        <SearchContent
          setValue={setValueSearch}
          value={valueSearch}
          list={list}
          setList={setList}
          setShowModalGuest={setShowModalGuest}
          setSearchVisible={setSearchVisible}
        />
      </S.SearchModal>
      <S.CreateModal
        open={showCreate}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <CreateContent onSuccess={handleCreatePostSuccess} />
      </S.CreateModal>
    </S.LayoutWrapper>
  );
}

export default MainLayout;