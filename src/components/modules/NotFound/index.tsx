'use client'
import React from "react";
import * as S from "./styles";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import Link from "next/link";
import { useAuthContext } from "@/contexts/AuthContext";
import useThemeStore from "@/hooks/useTheme";

const NotFound: React.FC = () => {
  const { userInfo } = useAuthContext();
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <S.HomeWrapper className={darkMode ? "theme-dark" : "theme-light"}>
      <S.Message>
        <Typography color="black" variant="h5" fontSize="24px">
          Trang này không hiển thị
        </Typography>
        <Typography
          color="black"
          variant="body-text-small-normal"
          fontSize="16px"
        >
          Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết
          mà bạn đang cố mở có chính xác không.
        </Typography>
        <S.ButtonContainer>
          <Link href={userInfo?._id ? "/" : "/sign-in"} passHref>
            <Button
              $color= "#000"
              $hoverColor={darkMode ? "#000" : "#fff"}
              $borderColor="#000"
              $hoverBackgroundColor={darkMode ? "#F7D600" : "#000"}
              $width="200px"
              $padding="40px"
              $fontSize="16px"
              $fontWeight="bold"
            >
              Quay lại trang chủ
            </Button>
          </Link>
        </S.ButtonContainer>
      </S.Message>
    </S.HomeWrapper>
  );
};

export default NotFound;
