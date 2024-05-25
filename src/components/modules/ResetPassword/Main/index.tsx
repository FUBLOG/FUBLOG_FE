"use client";

import Intro from "../../SignIn/Intro";
import FormReset from "../FormReset";

import * as S from "./styles";

function ResetPassword() {
  return (
    <S.HomeWrapper>
      <Intro />
      <FormReset />
    </S.HomeWrapper>
  );
}

export default ResetPassword;
