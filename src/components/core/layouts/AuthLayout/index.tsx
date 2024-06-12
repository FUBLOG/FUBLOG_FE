"use client";

import Image from "next/legacy/image";
import { Flex } from "antd";
import Link from "next/link";

import Button from "../../common/Button";

import logo from "@/public/logo.png";

import * as S from "./styles";

interface AuthLayoutProps {
  readonly children: React.ReactNode;
}
function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.Container>
          <Link href="/home">
            <Image src={logo} alt="logo header" />
          </Link>
          <Flex gap={15} style={{ marginRight: "20px" }}>
            <Link href="/sign-in">
              <Button type="default" children={"Đăng nhập"} $width="100px" />
            </Link>
            <Link href="/sign-up">
              <Button
                color="red"
                type="primary"
                children={"Đăng ký"}
                $width="100px"
              />
            </Link>
          </Flex>
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default AuthLayout;
