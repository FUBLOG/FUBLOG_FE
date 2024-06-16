"use client";

import * as S from "./styles";

interface VerifyLayoutProps {
  readonly children: React.ReactNode;
}

function VerifyLayout({ children }: VerifyLayoutProps) {
  return (
    <S.LayoutWrapper>
      <S.Header></S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default VerifyLayout;
