"use client";

import { useState } from "react";
import { useState } from "react";
import Intro from "../../SignIn/Intro";
import FormSignUp from "../FormSignup";

import * as S from "./styles";
import FormVerification from "../FormVerification";
import FormVerification from "../FormVerification";

function SignUp() {
  const [nextStep, setNextStep] = useState("signup");
  const [nextStep, setNextStep] = useState("signup");
  return (
    <S.HomeWrapper>
      <Intro />
      {nextStep === "signup" ? (
        <FormSignUp setNextStep={setNextStep} />
      ) : (
        <FormVerification setNextStep={setNextStep} />
      )}
    </S.HomeWrapper>
  );
}

export default SignUp;
