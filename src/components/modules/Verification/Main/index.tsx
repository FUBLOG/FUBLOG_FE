"use client";

import React, { useState } from "react";
import Intro from "../../SignIn/Intro";
import FormForgot from "../FormForgot";
import FormVerification from "../FormVerification";

import * as S from "./styles";

function Verification() {
  const [status, setStatus] = useState<string>("forgot");
  const [email, setEmail] = useState("");

  return (
    <S.HomeWrapper>
      <Intro />
      {status === "forgot" ? (
        <FormForgot setStatus={setStatus} setEmail={setEmail} />
      ) : (
        <FormVerification email={email} setStatus={setStatus} />
      )}
    </S.HomeWrapper>
  );
}

export default Verification;
