"use client";

import { useState } from "react";
import Intro from "../../SignIn/Intro";
import FormSignUp from "../FormSignup";

import * as S from "./styles";
import FormVerification from "../FormVerification";

function SignUp() {
  const [nextStep, setNextStep] = useState("signup");
  const [formData, setFormData] = useState();
  const [email, setEmail] = useState("");

  return (
    <S.HomeWrapper>
      <Intro />
      {nextStep === "signup" ? (
        <FormSignUp
          setNextStep={setNextStep}
          setFormData={setFormData}
          formData={formData}
          setEmail={setEmail}
        />
      ) : (
        <FormVerification
          email={email}
          setNextStep={setNextStep}
          formData={formData}
        />
      )}
    </S.HomeWrapper>
  );
}

export default SignUp;
