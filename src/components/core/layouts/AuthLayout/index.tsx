"use client";

import Button from "../../common/Button";
import Image from "next/image";
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
          <Button type="default" children={"  Đăng nhập"} />
          <Button color="red" type="primary" children={"Đăng ký"} />
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default AuthLayout;
