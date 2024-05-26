import { ReactNode } from "react";
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

function Layout({ children, isGuestPage = false }: LayoutProps) {
  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.LogoContainer>
          <Image src={logo} alt="logo header" />
        </S.LogoContainer>
        <S.IconContainer>
          <HomeOutlined style={{ fontSize: "22px" }} />
          <SearchOutlined style={{ fontSize: "22px" }} />
          <EditOutlined style={{ fontSize: "22px" }} />
          <MessageOutlined style={{ fontSize: "22px" }} />
          <BellOutlined style={{ fontSize: "22px" }} />
        </S.IconContainer>
        <S.ActionsContainer>
          {isGuestPage ? (
            <S.GuestActions>
              <Button type="default" children="Đăng nhập" />
              <Button color="red" type="primary" children="Đăng ký" />
            </S.GuestActions>
          ) : (
            <S.UserIconContainer>
              <UserOutlined style={{ fontSize: "28px" }} />
              <CaretDownOutlined style={{ fontSize: "18px", marginLeft: "4px" }} />  {}
            </S.UserIconContainer>
          )}
        </S.ActionsContainer>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default Layout;
