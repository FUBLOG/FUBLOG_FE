"use client";

import * as S from "./styles";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.Container>ĐÂY LÀ HEADER</S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default AuthLayout;
