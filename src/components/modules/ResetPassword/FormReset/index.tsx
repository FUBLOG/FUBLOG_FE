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
import { SetStateAction, useState } from "react";

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
    try {
      await postRequest(authEndpoint.RESET_PASSWORD, { data });
      message.success("Đặt lại mật khẩu thành công");
      startCountdown(3);
    } catch (error) {
      message.error("Đặt lại mật khẩu thất bại");
    }
  }

  const startCountdown = (initialCountdown: SetStateAction<number>) => {
    setCountdown(initialCountdown);
    const intervalId = setInterval(() => {
      updateCountdown(intervalId);
    }, 1000);
  };

  const updateCountdown = (
    intervalId: string | number | NodeJS.Timeout | undefined
  ) => {
    setCountdown((prevCountdown) => {
      if (prevCountdown > 1) {
        showCountdownMessage(prevCountdown - 1);
        return prevCountdown - 1;
      } else {
        clearInterval(intervalId);
        closeWindow();
        return prevCountdown - 1;
      }
    });
  };

  const showCountdownMessage = (seconds: number) => {
    message.info(`Trang xác thực sẽ đóng trong ${seconds} giây.`);
  };

  const closeWindow = () => {
    window.close();
  };
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
