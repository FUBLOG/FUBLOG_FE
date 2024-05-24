"use client";

import Intro from "../../SignIn/Intro";
import FormSignUp from "../FormSignup";

import * as S from "./styles";

function SignUp() {
  return (
    <S.HomeWrapper>
      <Intro />
      <FormSignUp />
    </S.HomeWrapper>
  );
}

export default SignUp;
