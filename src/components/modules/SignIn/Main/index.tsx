"use client";

import Title from "antd/es/typography/Title";

import Form from "../Form";

import * as S from "./styles";

function SignIn() {
  return (
    <S.HomeWrapper>
      <Title level={2}>Đăng nhập</Title>
      <Form />
    </S.HomeWrapper>
  );
}

export default SignIn;
