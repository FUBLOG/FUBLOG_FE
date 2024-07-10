"use client";

import FormSignIn from "../FormSignin";
import Intro from "../Intro";

import * as S from "./styles";

function SignIn() {
  return (
    <S.HomeWrapper>
      <Intro />
      <FormSignIn />
    </S.HomeWrapper>
  );
}

export default SignIn;
