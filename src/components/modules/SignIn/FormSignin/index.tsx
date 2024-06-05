"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Input from "@/components/core/common/form/Input";
import InputPassword from "@/components/core/common/form/InputPassword";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import { postRequest } from "@/services/request";
import { constants } from "@/settings";
import { authEndpoint } from "@/services/endpoint";
import webStorageClient from "@/utils/webStorageClient";
import webLocalStorage from "@/utils/webLocalStorage";

import * as S from "./styles";

function FormSignIn() {
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log(values);
    try {
      const data = {
        email: values.mail!,
        password: values.password!,
        isRemember: values.isRemember!,
      };
      const res: any = await postRequest(
        constants.API_SERVER + authEndpoint.SIGN_IN,
        { data }
      );
      webStorageClient.setToken(res?.metadata?.tokens?.accessToken, {
        maxAge: 60 * 4,
      });
      webLocalStorage.set("refreshToken", res?.metadata?.tokens?.refreshToken);
      webLocalStorage.set("privateKey", res?.metadata?.tokens?.privateKey);

      router.push("/");
    } catch (error) {}
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
        onFinish={onFinish}
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
          <FormItem
            style={{ margin: "0px" }}
            name="isRemember"
            valuePropName="checked"
          >
            <Checkbox>
              <Typography
                variant="body-text-small-normal"
                color="#B9B4C7"
                fontSize="xx-small"
              >
                Nhớ mật khẩu
              </Typography>
            </Checkbox>
          </FormItem>

          <Link href="/verification">
            <Typography
              variant="caption-small"
              color="#B9B4C7"
              fontSize="xx-small"
              align="right"
              textDecoration="underline"
            >
              Quên mật khẩu?
            </Typography>
          </Link>
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
            htmlType="submit"
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
          <Link href="/sign-up">
            <Typography
              variant="caption-small"
              color="#B9B4C7"
              fontSize="xx-small"
              align="right"
              textDecoration="underline"
            >
              Đăng ký
            </Typography>
          </Link>
        </S.Typography>
      </Form>
    </S.HomeWrapper>
  );
}

export default FormSignIn;
