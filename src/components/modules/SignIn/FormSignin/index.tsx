"use client";

import { BulbTwoTone, LockOutlined, UserOutlined } from "@ant-design/icons";
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
import { errorMessage } from "@/services/errorMessage";
import useThemeStore from "@/hooks/useTheme";

function FormSignIn(showModalGuest: any) {
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
          if (showModalGuest?.showModalGuest === false) {
            router.push("/");
          } else {
            router.refresh();
          }
        })
        .finally(() => {
          showModalGuest(false);
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
            color={darkMode ? "#B9B4C7" : "#352F44"}
            fontSize="x-large"
            align="center"
            margin="0 0  0 0"
          >
            ĐĂNG NHẬP
          </Typography>
          <BulbTwoTone
            twoToneColor={darkMode ? "#5C5470" : "#F7D600"}
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={toggleDarkMode}
          />
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
              prefix={<UserOutlined />}
              isRequired
              label="Email"
              colorLabel={darkMode ? "#B9B4C7" : "#352F44"}
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
              colorLabel={darkMode ? "#B9B4C7" : "#352F44"}
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
                  color={darkMode ? "#B9B4C7" : "#352F44"}
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
                color={darkMode ? "#B9B4C7" : "#352F44"}
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
              disabled={loading}
            >
              ĐĂNG NHẬP
            </Button>
          </FormItem>
          <S.Typography>
            <Typography
              variant="body-text-small-normal"
              color={darkMode ? "#B9B4C7" : "#352F44"}
              fontSize="xx-small"
              align="center"
            >
              Chưa có tài khoản?
            </Typography>
            <Link href="/sign-up">
              <Typography
                variant="caption-small"
                color={darkMode ? "#B9B4C7" : "#352F44"}
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
