"use client";

import FormSignIn from "../FormSignin";
import Intro from "../Intro";

import * as S from "./styles";

function SignIn() {
  return (
    <S.HomeWrapper>
      <Intro />
      <FormSignIn showModalGuest={false} />
    </S.HomeWrapper>
  );
}

export default SignIn;
