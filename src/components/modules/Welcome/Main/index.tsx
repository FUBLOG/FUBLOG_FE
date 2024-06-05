"use client";

import { useSearchParams } from "next/navigation";
import * as S from "./styles";

function Welcome() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  if (!token) {
    return <S.HomeWrapper>No token provided</S.HomeWrapper>;
  }

  return <S.HomeWrapper>Welcome {token}</S.HomeWrapper>;
}

export default Welcome;
