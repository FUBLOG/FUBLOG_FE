"use client";
import {Users} from "../../../modules/Home/SearchBar/SearchedUser/test"
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Flex, Modal } from "antd";
import Image from "next/legacy/image";
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
import { jwtDecode } from "jwt-decode";

import Button from "../../common/Button";

import webStorageClient from "@/utils/webStorageClient";

import logo from "@/public/logo.png";

import SearchContent from "../../../modules/Home/SearchBar"; 

import * as S from "./styles";
import Input from "../../common/form/Input";

interface LayoutProps {
  readonly children: ReactNode;
}
import Chat from "@/components/modules/Chat";

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
  const [searchVisible,setSearchVisible] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
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
    // Search Modal
    const showSearchModal = ()=>{
      setSearchVisible(true);
    }
    
    const handleOk = ()=> {
      setSearchVisible(true);
    }
    const handleCancle = ()=> {
      setSearchVisible(false);
    }
    // const handleSearch = (query: string) => {
    //   // Perform search here and set search results
    //   setSearchResults([`Result 1 for ${query}`, `Result 2 for ${query}`, `Result 3 for ${query}`]);
    // };
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
                  style={{
                    fontSize: "22px",
                  }}
                />
              )}
            </Link>
            <Link href="" onClick={() => handleSetNavigation("edit")}>
              {nav === "edit" ? (
                <EditFilled onClick={showSearchModal} style={{ fontSize: "22px" }} />
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

      <S.SearchModal
        open={searchVisible}
        onOk={handleOk}
        onCancel={handleCancle}
        className="searchModal"
        footer={null}
      >
        <SearchContent onPressEnter={handleCancle}/>
      </S.SearchModal>
    </S.LayoutWrapper>

    
  );



}

export default MainLayout;
