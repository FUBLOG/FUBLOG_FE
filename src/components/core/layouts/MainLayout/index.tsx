"use client"
import { ReactNode } from "react";
import { Flex } from "antd";
import Image from "next/image";
import {
  HomeOutlined,
  SearchOutlined,
  EditOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
  CaretDownOutlined  
} from "@ant-design/icons";
import * as S from "./styles";
import Button from "../../common/Button";
import logo from "@/public/logo.png";

interface LayoutProps {
  children: ReactNode;
  isGuestPage?: boolean;
}

function MainLayout({ children, isGuestPage = true }: LayoutProps) {
  return (
    <S.LayoutWrapper>
      <S.Header>
      <S.Container>
      <Image src={logo} alt="logo header" />
        <S.IconContainer>
          <HomeOutlined style={{ fontSize: "22px" }} />
          <SearchOutlined style={{ fontSize: "22px" }} />
          <EditOutlined style={{ fontSize: "22px" }} />
          <MessageOutlined style={{ fontSize: "22px" }} />
          <BellOutlined style={{ fontSize: "22px" }} />
        </S.IconContainer>
          {isGuestPage ? (
          <Flex gap={15} style={{ marginRight: "20px" }}>
          <a href="/sign-in">
            <Button type="default" children={"Đăng nhập"} $width="100px" />
          </a>
          <a href="/sign-up">
            <Button
              color="red"
              type="primary"
              children={"Đăng ký"}
              $width="100px"
            />
          </a>
        </Flex>
          ) : (
            <S.UserIconContainer>
              <UserOutlined style={{ fontSize: "28px" }} />
              <CaretDownOutlined style={{ fontSize: "18px", marginLeft: "4px" }} />  {}
            </S.UserIconContainer>
          )}
          </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default MainLayout;