"use client";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Flex } from "antd";
import Image from "next/legacy/image";
import {
  HomeOutlined,
  SearchOutlined,
  EditOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
  CaretDownOutlined,
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

function MainLayout({ children }: LayoutProps) {
  const [isGuest, setIsGuest] = useState(true);
  useEffect(() => {
    const token = webStorageClient.get(constants.ACCESS_TOKEN);
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
        <S.Container>
          <Image src={logo} alt="logo header" />
          <S.IconContainer>
            <Link href="/home">
              <HomeOutlined style={{ fontSize: "22px" }} />
            </Link>
            <SearchOutlined style={{ fontSize: "22px" }} />
            <EditOutlined style={{ fontSize: "22px" }} />
            <MessageOutlined style={{ fontSize: "22px" }} />
            <BellOutlined style={{ fontSize: "22px" }} />
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
    </S.LayoutWrapper>
  );
}

export default MainLayout;
