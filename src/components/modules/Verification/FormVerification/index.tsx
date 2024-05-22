"use client";

import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";
import FormItem from "antd/es/form/FormItem";

import Input from "@/components/core/common/form/Input";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import verImg from "@/public/verified.png";
import arrow from "@/public/arrow.png";

import * as S from "./styles";
import Image from "next/image";

function FormVerification() {
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
        style={{ width: "100%" }}
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <FormItem
          name="mail"
          rules={[{ required: true, message: "Vui lòng nhập gmail" }]}
        >
          <Input
            placeholder="Nhập gmail"
            prefix={<UserOutlined />}
            isRequired
            label="Gmail"
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
            className="ButtonWrapper"
            type="default"
            $backgroundColor="#FAF0E6"
            $width={"100px"}
          >
            XÁC THỰC
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

export default FormVerification;
