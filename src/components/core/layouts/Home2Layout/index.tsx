"use client";

import { ReactNode } from "react";
import { Flex } from "antd";

import Button from "../../common/Button";
import Image from "next/image";
import { HomeOutlined, SearchOutlined, EditOutlined, MessageOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import * as S from "./styles";


interface HomelayoutProps {
  children: ReactNode;
}

function HomeGuest({ children }: HomelayoutProps) {
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
          <Flex gap={15} style={{ marginRight: "20px" }}>
            <Button type="default" children={"Đăng nhập"} />
            <Button color="red" type="primary" children={"Đăng ký"} />
          </Flex>
        </S.IconContainer>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default HomeGuest;
