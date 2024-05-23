"use client";

import { useState } from "react";
import Intro from "../../SignIn/Intro";
import FormForgot from "../FormForgot";
import FormVerification from "../FormVerification";

import * as S from "./styles";

function Verification() {
  const [status, setStatus] = useState<string>("forgot");
  return (
    <S.HomeWrapper>
      <Intro />
      {status === "forgot" ? (
        <FormForgot status={status} setStatus={setStatus} />
      ) : (
        <FormVerification />
      )}
    </S.HomeWrapper>
  );
}

export default Verification;
