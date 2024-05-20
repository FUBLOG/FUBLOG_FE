"use client";

import Title from "antd/es/typography/Title";

import * as S from "./styles";
import Form from "../Form";

function SignIn() {
  return (
    <S.HomeWrapper>
      <Title level={2}>Đăng nhập</Title>
      <Form />
    </S.HomeWrapper>
  );
}

export default SignIn;
