"use client";
import { ReactNode } from "react";
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

import Button from "../../common/Button";

import logo from "@/public/logo.png";

import * as S from "./styles";

interface LayoutProps {
  readonly children: ReactNode;
  readonly isGuestPage?: boolean;
}

function MainLayout({ children, isGuestPage = true }: LayoutProps) {
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
          {isGuestPage ? (
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
              <a href="/profile">
                <UserOutlined style={{ fontSize: "28px" }} />
              </a>
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
