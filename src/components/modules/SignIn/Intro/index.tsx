"use client";

import Title from "antd/es/typography/Title";
import introAu from "@/public/introAu.png";

import * as S from "./styles";
import Image from "next/image";

function Intro() {
  return (
    <S.HomeWrapper>
      <Image src={introAu} alt="logo header" />
    </S.HomeWrapper>
  );
}

export default Intro;
