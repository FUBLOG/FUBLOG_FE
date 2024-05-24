import { ReactNode } from "react";
import Image from "next/image";
import { HomeOutlined, SearchOutlined, EditOutlined, MessageOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import * as S from "./styles";
import Button from "../../common/Button";
import logo from "@/public/logo.png";

interface LayoutProps {
  children: ReactNode;
  isGuestPage?: boolean;
}

function Layout({ children, isGuestPage = true }: Readonly<LayoutProps>) {
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
              <Button type="default" children={"Đăng nhập"} />
              <Button color="red" type="primary" children={"Đăng ký"} />
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

export default Layout;
