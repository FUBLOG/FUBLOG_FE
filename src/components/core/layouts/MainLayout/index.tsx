"use client";

import { useState, ReactNode, useEffect } from "react";
import { Flex, Menu, Dropdown, Spin, Badge } from "antd";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  HomeOutlined,
  SearchOutlined,
  EditOutlined,
  MessageOutlined,
  BellOutlined,
  MessageFilled,
  HomeFilled,
  EditFilled,
  BellFilled,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";

import Button from "../../common/Button";

import logo from "@/public/logo.png";

import SearchContent from "../../../modules/SearchBar/Main";
import NotificationModal from "@/components/modules/NotificationModal";

import * as S from "./styles";

import Chat from "@/components/modules/Chat";
import { useAuth } from "@/hooks/useAuthStatus";
import { useAuthContext } from "@/contexts/AuthContext";
import ModalGuest from "@/components/modules/ModalGuest";
import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ProfileRequestResponseList } from "@/model/response";
import { CreateContent } from "@/components/modules/CreatePost";
import { useRouter } from "next/navigation";
import useSidebarBadge, { useGetFriendRequestNotification, useGetMessageNotification, useGetNotificationCount } from "@/hooks/useSidebarBadge";
import { useListenConversation, useListenFriendRequest, useListenNotification } from "@/hooks/useListen";
import useThemeStore from "@/hooks/useTheme";
import { useGetProfile } from "@/hooks/useProfile";

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
  const { messageCount, notificationCount, friendRequestCount } = useSidebarBadge();
  useGetMessageNotification();
  useGetFriendRequestNotification();
  useGetNotificationCount();
  useListenConversation();
  useListenNotification();
  useListenFriendRequest();

  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);



  useEffect(() => {
    if (
      webStorageClient.get(constants.IS_AUTH) &&
      webStorageClient.get(constants.ACCESS_TOKEN) !== "" &&
      webStorageClient.get(constants.PROFILE_HASH) !== ""
    ) {
      handleCancel();
      setShowModalGuest(false);
    }
  }, [
    webStorageClient.get(constants.IS_AUTH),
    webStorageClient.get(constants.ACCESS_TOKEN),
    webStorageClient.get(constants.REFRESH_TOKEN),
  ]);

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
    setShowCreate(false);
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
        <Link href={`/profile?pId=${userInfo?.profileHash}`}>
          Xem trang cá nhân
        </Link>
      </Menu.Item>
      <Menu.Item key="editProfile" className="custom-menu-item">
        <Link href={`/change-password`}>
          Đổi mật khẩu
        </Link>
      </Menu.Item>
      <Menu.Item
        key="logout"
        className="custom-menu-item"
        onClick={() => {
          logout();
        }}
      >
        <button style={{ all: "unset", cursor: "pointer" }}>
          {loading ? <Spin size="small" /> : "Đăng xuất"}
        </button>
      </Menu.Item>
    </S.CustomMenu>
  );

  return (
    <S.LayoutWrapper className={darkMode ? "theme-dark" : "theme-light"}>
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
            <Badge
              count={messageCount}
              style={{
                margin: "0.1rem 1rem 0 0",
              }}
            >
              <Button type="text" onClick={() => handleSetNavigation("mess")}>
                {nav === "mess" ? (
                  <MessageFilled style={{ fontSize: "22px" }} />
                ) : (
                  <MessageOutlined style={{ fontSize: "22px" }} />
                )}
              </Button>
            </Badge>
            <Badge count={friendRequestCount + notificationCount}>
              <Link href="#" onClick={showBellModal}>
                {nav === "bell" ? (
                  <BellFilled style={{ fontSize: "22px" }} />
                ) : (
                  <BellOutlined style={{ fontSize: "22px" }} />
                )}
              </Link>
            </Badge>
            <div onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
              {darkMode ? (
                <MoonOutlined style={{ fontSize: "22px" }} />
              ) : (
                <SunOutlined style={{ fontSize: "22px" }} />
              )}
            </div>
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
              <Dropdown overlay={menuItems} trigger={["hover"]}>
                <Link href={`/profile?pId=${userInfo?.profileHash}`}>
                  <Image
                    src={userInfo?.userInfo?.avatar|| "/default-avatar.png"}
                    alt="User Avatar"
                    width={42}
                    height={42}
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
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
        destroyOnClose={true}
        footer={false}
      >
        <CreateContent onSuccess={handleCreatePostSuccess} />
      </S.CreateModal>
    </S.LayoutWrapper>
  );
}

export default MainLayout;
