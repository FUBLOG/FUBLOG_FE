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
import { authEndpoint } from "@/services/endpoint";

import * as S from "./styles";
import { useAuth } from "@/hooks/useAuthStatus";

function FormSignIn() {
  const router = useRouter();
  const { login } = useAuth();
  const onFinish = async (values: any) => {
    try {
      const data = {
        email: values.mail,
        password: values.password,
        isRemember: values.isRemember,
      };
      const res: any = await postRequest(authEndpoint.SIGN_IN, { data });
      login(
        {
          ACCESS_TOKEN: res?.metadata?.tokens?.accessToken,
          PROFILE_HASH: res?.metadata?.user?.profileHash,
          REFRESH_TOKEN: res?.metadata?.tokens?.refreshToken,
          PRIVATEKEY: res?.metadata?.tokens?.privateKey,
        },
        res?.metadata?.user
      );

      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
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
