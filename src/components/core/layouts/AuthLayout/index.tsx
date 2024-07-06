"use client";

import Image from "next/legacy/image";
import { Flex, Spin } from "antd";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuthStatus";

import Button from "../../common/Button";

import logo from "@/public/logo.png";

import * as S from "./styles";
import useThemeStore from "@/hooks/useTheme";

interface AuthLayoutProps {
  readonly children: React.ReactNode;
}
function AuthLayout({ children }: AuthLayoutProps) {
  const { loading } = useAuth();
  const darkMode = useThemeStore((state) => state.darkMode)
  return (
    <S.LayoutWrapper className={darkMode ? "theme-dark" : "theme-light"}>
      <S.Header>
        <S.Container>
          <Link href="/">
            <Image src={logo} alt="logo header" />
          </Link>
          <Flex gap={15} style={{ marginRight: "20px" }}>
            <Link href="/sign-in">
              <Button
                type="default"
                children={"Đăng nhập"}
                $width="100px"
                disabled={loading}
              />
            </Link>
            <Link href="/sign-up">
              <Button
                color="red"
                type="primary"
                children={"Đăng ký"}
                $width="100px"
                disabled={loading}
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
