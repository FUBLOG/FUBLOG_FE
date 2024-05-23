"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { HomeOutlined, SearchOutlined, EditOutlined, MessageOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import * as S from "./styles";

interface HomelayoutProps {
  children: ReactNode;
}

function Homelayout({ children }: HomelayoutProps) {
  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.LogoContainer>
          <Image src="/logo.png" alt="logo header" width={100} height={50} />
        </S.LogoContainer>
        <S.IconContainer>
          <HomeOutlined />
          <SearchOutlined />
          <EditOutlined />
          <MessageOutlined />
          <BellOutlined />
          <UserOutlined />
        </S.IconContainer>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default Homelayout;
