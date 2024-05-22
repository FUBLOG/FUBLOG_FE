"use client";

import Intro from "../../SignIn/Intro";
import FormVerification from "../FormVerification";
import * as S from "./styles";

function Verification() {
  return (
    <S.HomeWrapper>
      <Intro />
      <FormVerification />
    </S.HomeWrapper>
  );
}

export default Verification;
