import React from "react";
import * as S from "./style";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import Link from "next/link";
import { useAuthContext } from "@/contexts/AuthContext";
import useThemeStore from "@/hooks/useTheme";

const NotFound: React.FC = () => {
  const { userInfo } = useAuthContext();
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <S.HomeWrapper>
      <S.Message className={darkMode ? "theme-dark" : "theme-light"}>
        <Typography variant="h5" fontSize="24px">
          Trang này không hiển thị
        </Typography>
        <Typography
          variant="body-text-small-normal"
          fontSize="16px"
          className={darkMode ? "theme-dark" : "theme-light"}
        >
          Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết
          mà bạn đang cố mở có chính xác không.
        </Typography>
        <S.ButtonContainer>
          <Link href={userInfo?._id ? "/" : "/sign-in"} passHref>
            <Button
              type="primary"
              $width="200px"
              $padding="40px"
              $fontSize="16px"
              className={darkMode ? "theme-dark" : "theme-light"}
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
