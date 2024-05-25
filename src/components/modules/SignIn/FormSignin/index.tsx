"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, CheckboxProps, Form } from "antd";
import FormItem from "antd/es/form/FormItem";

import Input from "@/components/core/common/form/Input";
import InputPassword from "@/components/core/common/form/InputPassword";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";

import * as S from "./styles";

function FormSignIn() {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <S.HomeWrapper>
      <Typography
        variant="h1"
        color="#B9B4C7"
        fontSize="x-large"
        align="center"
        margin="0 0  50px 0"
      >
        ĐĂNG NHẬP
      </Typography>

      <Form
        name="basic"
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <FormItem
          name="mail"
          rules={[{ required: true, message: "Vui lòng nhập email" }]}
        >
          <Input
            placeholder="Nhập email"
            prefix={<UserOutlined />}
            isRequired
            label="Email"
          />
        </FormItem>
        <FormItem
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <InputPassword
            placeholder="Nhập mật khẩu"
            prefix={<LockOutlined />}
            isRequired
            label="Mật khẩu"
          />
        </FormItem>
        <S.Label>
          <FormItem style={{ margin: "0px" }}>
            <Checkbox onChange={onChange}>
              <Typography
                variant="body-text-small-normal"
                color="#B9B4C7"
                fontSize="xx-small"
              >
                Nhớ mật khẩu
              </Typography>
            </Checkbox>
          </FormItem>

          <a href="/verification">
            <Typography
              variant="caption-small"
              color="#B9B4C7"
              fontSize="xx-small"
              align="right"
              textDecoration="underline"
            >
              Quên mật khẩu?
            </Typography>
          </a>
        </S.Label>
        <FormItem
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            className="ButtonWrapper"
            type="default"
            $backgroundColor="#FAF0E6"
            $margin="30px 0 0 0"
            $width={"100px"}
          >
            ĐĂNG NHẬP
          </Button>
        </FormItem>
        <S.Typography>
          <Typography
            variant="body-text-small-normal"
            color="#B9B4C7"
            fontSize="xx-small"
            align="center"
          >
            Chưa có tài khoản?
          </Typography>
          <a href="/sign-up">
            <Typography
              variant="caption-small"
              color="#B9B4C7"
              fontSize="xx-small"
              align="right"
              textDecoration="underline"
            >
              Đăng ký
            </Typography>
          </a>
        </S.Typography>
      </Form>
    </S.HomeWrapper>
  );
}

export default FormSignIn;
