"use client";

import { ReactNode } from "react";
import Image from "next/image";

import Button from "../../common/Button";

import { Flex } from "antd";
import logo from "@/public/logo.png"
import { HomeOutlined, SearchOutlined, EditOutlined, MessageOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import * as S from "./styles";

interface HomelayoutProps {
  children: ReactNode;
  isGuestPage?: boolean; 
}

function Homelayout({ children, isGuestPage = true }: HomelayoutProps) {
  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.LogoContainer>
          <Image src={logo} alt="logo header" />
        </S.LogoContainer>
        <S.IconContainer>
          <HomeOutlined />
          <SearchOutlined />
          <EditOutlined />
          <MessageOutlined />
          {isGuestPage && ( 
            <S.GuestActions>
               <Flex gap={15} style={{ marginRight: "20px" }}>
            <Button type="default" children={"Đăng nhập"} />
            <Button color="red" type="primary" children={"Đăng ký"} />
          </Flex>
              
            </S.GuestActions>
          )}
          {!isGuestPage && (
            <>
              <BellOutlined />
              <UserOutlined />
            </>
          )}
        </S.IconContainer>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default Homelayout;
