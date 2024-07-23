"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Spin, message } from "antd";
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
import useThemeStore from "@/hooks/useTheme";

function FormSignIn(setShowModalGuest: any) {
  const router = useRouter();
  const { login, loading, setLoading } = useAuth();
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const data = {
        email: values.mail,
        password: values.password,
        isRemember: values.isRemember,
      };

      const res = await postRequest(authEndpoint.SIGN_IN, {
        data: data,
        security: true,
      });

      await login(
        {
          ACCESS_TOKEN: res?.metadata?.tokens?.accessToken,
          PROFILE_HASH: res?.metadata?.user?.profileHash,
          REFRESH_TOKEN: res?.metadata?.tokens?.refreshToken,
          PRIVATEKEY: res?.metadata?.tokens?.privateKey,
        },
        res?.metadata?.user
      )
        .then(() => {
          router.push("/");
        })
        .finally(() => {
          setShowModalGuest(false);
        });
    } catch (err) {}
    setLoading(false);
  };
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  return (
    <>
      <Spin spinning={loading} fullscreen />
      <S.HomeWrapper>
        <S.TitleLogin>
          <Typography
            variant="h1"
            color={darkMode ? "#F7D600" : "#000"}
            fontSize="x-large"
            align="center"
            margin="0 0  0 0"
          >
            ĐĂNG NHẬP
          </Typography>
        </S.TitleLogin>

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
              prefix={
                <UserOutlined
                  style={{
                    color: "#000",
                  }}
                />
              }
              isRequired
              label="Email"
              colorLabel={darkMode ? "#F7D600" : "#000"}
            />
          </FormItem>
          <FormItem
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <InputPassword
              placeholder="Nhập mật khẩu"
              prefix={
                <LockOutlined
                  style={{
                    color: "#000 ",
                  }}
                />
              }
              isRequired
              label="Mật khẩu"
              colorLabel={darkMode ? "#F7D600" : "#000"}
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
                  color={darkMode ? "#F7D600" : "#000"}
                  fontSize="xx-small"
                >
                  Nhớ mật khẩu
                </Typography>
              </Checkbox>
            </FormItem>

            <Link href="/verification">
              <Typography
                variant="caption-small"
                fontSize="xx-small"
                align="right"
                textDecoration="underline"
                color={darkMode ? "#F7D600" : "#000"}
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
              htmlType="submit"
              type="default"
              children={"Đăng nhập"}
              $width="100px"
              disabled={loading}
              $color={darkMode ? "#fff" : "#352f44"}
              $hoverColor={darkMode ? "#000" : "#fff"}
              $borderColor={darkMode ? "#fff" : "#352f44"}
              $hoverBackgroundColor={darkMode ? "#F7D600" : "#000"}
              $margin="30px 0 0 0"
            />
          </FormItem>
          <S.Typography>
            <Typography
              variant="body-text-small-normal"
              color={darkMode ? "#F7D600" : "#000"}
              fontSize="xx-small"
              align="center"
            >
              Chưa có tài khoản?
            </Typography>
            <Link href="/sign-up">
              <Typography
                variant="caption-small"
                color={darkMode ? "#F7D600" : "#000"}
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
    </>
  );
}

export default FormSignIn;
