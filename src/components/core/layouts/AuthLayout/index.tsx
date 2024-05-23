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
          <Flex gap={15} style={{ marginRight: "20px" }}>
            <Button type="default" children={"Đăng nhập"} $width="100px" />
            <Button
              color="red"
              type="primary"
              children={"Đăng ký"}
              $width="100px"
            />
          </Flex>
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default AuthLayout;
