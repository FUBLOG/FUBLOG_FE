"use client";

import Image from "next/image";
import { Flex } from "antd";

import Button from "../../common/Button";

import logo from "@/public/logo.png";

import * as S from "./styles";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.Container>
          <Image src={logo} alt="logo header" />
          <Flex gap={10}>
            <Button type="default" children={"Đăng nhập"} />
            <Button color="red" type="primary" children={"Đăng ký"} />
          </Flex>
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default AuthLayout;