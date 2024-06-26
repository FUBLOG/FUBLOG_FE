"use client";

import { LockOutlined } from "@ant-design/icons";
import { Form, message } from "antd";
import FormItem from "antd/es/form/FormItem";

import InputPassword from "@/components/core/common/form/InputPassword";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";

import * as S from "./styles";
import { postRequest } from "@/services/request";
import { authEndpoint } from "@/services/endpoint";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function FormReset() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [_, setCountdown] = useState(3);

  async function onFinish(values: any): Promise<void> {
    const data = {
      password: values?.newPassword!,
      confirmPassword: values?.confirmPassword!,
      otp: token,
    };
    await postRequest(authEndpoint.RESET_PASSWORD, {
      data,
    }).then(() => {
      message.success("Đặt lại mật khẩu thành công");
      const intervalId = setInterval(() => {
        setCountdown((prevCountdown) => {
          message.info(`Trang xác thực sẽ đóng trong ${prevCountdown} giây.`);
          if (prevCountdown < 1) {
            window.close();
            clearInterval(intervalId);
          }
          return prevCountdown - 1;
        });
      }, 1000);
    });
  }

  return (
    <S.HomeWrapper>
      <Typography
        variant="h1"
        color="#B9B4C7"
        fontSize="x-large"
        align="center"
      >
        ĐẶT LẠI MẬT KHẨU
      </Typography>

      <Form
        name="basic"
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <FormItem
          name="newPassword"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <InputPassword
            placeholder="Nhập mật khẩu"
            prefix={<LockOutlined />}
            isRequired
            label="Nhập mật khẩu mới"
          />
        </FormItem>{" "}
        <FormItem
          name="confirmPassword"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <InputPassword
            placeholder="Nhập lại mật khẩu"
            prefix={<LockOutlined />}
            isRequired
            label="Nhập lại mật khẩu mới"
          />
        </FormItem>
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
            $margin="30px 0 0 0"
            $width={"100px"}
          >
            LƯU
          </Button>
        </FormItem>
      </Form>
    </S.HomeWrapper>
  );
}

export default FormReset;
