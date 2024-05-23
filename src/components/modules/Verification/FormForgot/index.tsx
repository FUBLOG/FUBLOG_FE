"use client";

import { Dispatch, SetStateAction } from "react";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import Image from "next/image";

import Input from "@/components/core/common/form/Input";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";

import verImg from "@/public/verified.png";

import * as S from "./styles";

interface PageProps {
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
}

function FormForgot({ status, setStatus }: PageProps) {
  const onFinish = () => {
    setStatus("verification");
  };
  const [form] = Form.useForm();
  return (
    <S.HomeWrapper>
      <Typography
        variant="h1"
        color="#B9B4C7"
        fontSize="x-large"
        align="center"
      >
        QUÊN MẬT KHẨU
      </Typography>
      <S.Infor>
        <Image src={verImg} alt="logo verification" />
        <Typography
          style="italic"
          variant="body-text-small-normal"
          color="#B9B4C7"
          fontSize="xx-small"
        >
          Sau khi ấn xác thực HaS - Healing and Sharing sẽ gửi cho bạn một mail
          để bạn xác thực người dùng.
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
        <a href="/sign-in">
          <S.Typography
            style={{
              justifyContent: "left",
              margin: "0px 0px 10px 0px",
              color: "#B9B4C7",
            }}
          >
            <Button
              className="ButtonWrapper"
              type="default"
              $backgroundColor="#B9B4C7"
            >
              <ArrowLeftOutlined style={{ fontSize: "10px" }} />
            </Button>
            Quay lại đăng nhập
          </S.Typography>
        </a>
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
            color="#B9B4C7"
            fontSize="xx-small"
          >
            Tạo tài khoản mới?
          </Typography>
          <a href="/sign-up">
            <Typography
              variant="caption-small"
              color="#B9B4C7"
              fontSize="xx-small"
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

export default FormForgot;
