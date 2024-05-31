"use client";
import Image from "next/image";

import introAu from "@/public/introAu.png";

import * as S from "./styles";

function Intro() {
  return (
    <S.HomeWrapper>
      <Image src={introAu} alt="logo header" />
    </S.HomeWrapper>
  );
}

export default Intro;