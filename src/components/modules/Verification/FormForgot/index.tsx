"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Spin } from "antd";
import FormItem from "antd/es/form/FormItem";
import Image from "next/legacy/image";
import Link from "next/link";

import Input from "@/components/core/common/form/Input";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";

import verImg from "@/public/verified.png";
import verImg2 from "@/public/verified2.png";


import * as S from "./styles";
import { postRequest } from "@/services/request";
import { authEndpoint } from "@/services/endpoint";
import useThemeStore from "@/hooks/useTheme";

interface PageProps {
  readonly setStatus: Dispatch<SetStateAction<string>>;
  readonly setEmail: React.Dispatch<React.SetStateAction<string>>;
}

function FormForgot({ setStatus, setEmail }: PageProps) {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: any) => {
    setLoading(true);
    const data = {
      email: values?.email!,
    };
    setEmail(values?.email);
    await postRequest(authEndpoint.FORGOT_PASSWORD, {
      data,
    })
      .then(() => {
        setStatus("verification");
      })
      .catch(() => {});
    setLoading(false);
  };
  const [form] = Form.useForm();
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  return (
    <>
      <Spin spinning={loading} fullscreen></Spin>
      <S.HomeWrapper>
        <S.TitleLogin>
          <Typography
            variant="h1"
            color={darkMode ? "#B9B4C7" : "#352F44"}
            fontSize="x-large"
            align="center"
          >
            QUÊN MẬT KHẨU
          </Typography>
        </S.TitleLogin>
        <S.Infor>
          <Image src={darkMode ? verImg : verImg2} alt="logo verification" />
          <Typography
            style="italic"
            variant="body-text-small-normal"
            color={darkMode ? "#B9B4C7" : "#352F44"}
            fontSize="xx-small"
          >
            Sau khi ấn xác thực HaS - Healing and Sharing sẽ gửi cho bạn một
            mail để bạn xác thực người dùng.
          </Typography>
        </S.Infor>
        <Form
          form={form}
          onFinish={onFinish}
          style={{ width: "100%" }}
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <FormItem
            name="email"
            rules={[{ required: true, message: "Vui lòng nhập email" }]}
          >
            <Input
              placeholder="Nhập email"
              prefix={<UserOutlined style={{color : "#FAF0E6"}} />}
              isRequired
              label="Email"
              colorLabel={darkMode ? "#B9B4C7" : "#352F44"}
            />
          </FormItem>
          <Link href="/sign-in">
            <S.Typography
              style={{
                justifyContent: "left",
                margin: "0px 0px 10px 0px",
                color: darkMode ? "#B9B4C7" : "#352F44",
              }}
            >
              <Button
                className="ButtonWrapper"
                type="default"
                $backgroundColor="#FAF0E6"
                $width="10px"
              >
                <ArrowLeftOutlined style={{ fontSize: "10px" }} />
              </Button>
              Quay lại đăng nhập
            </S.Typography>
          </Link>
          <FormItem
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              htmlType="submit"
              className="ButtonWrapper"
              type="default"
              $backgroundColor="#FAF0E6"
              $width={"100px"}
            >
              GỬI
            </Button>
          </FormItem>
          <S.Typography>
            <Typography
              variant="body-text-small-normal"
              color={darkMode ? "#B9B4C7" : "#352F44"}
              fontSize="xx-small"
            >
              Tạo tài khoản mới?
            </Typography>
            <Link href="/sign-up">
              <Typography
                variant="caption-small"
                color={darkMode ? "#B9B4C7" : "#352F44"}
                fontSize="xx-small"
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

export default FormForgot;
