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
import useThemeStore from "@/hooks/useTheme";

function FormReset() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [_, setCountdown] = useState(3);
  const [validatePassword, setValidatePassword] = useState<boolean | null>(
    null
  );
  const [signal, setSignal] = useState(false);

  async function onFinish(values: any): Promise<void> {
    if (validatePassword) {
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
    } else {
      message.info(
        "Mật khẩu phải bao gồm từ 8 đến 32 kí tự, 1 chữ viết hoa, 1 kí tự đặc biệt."
      );
    }
  }

  const handleValidatePassword = (value: any) => {
    const regrex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
    if (!regrex.test(value)) setValidatePassword(false);
    else setValidatePassword(true);
    console.log(validatePassword);
  };

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
    message.info(`Trang đặt lại mật khẩu sẽ đóng trong ${seconds} giây.`);
  };

  const closeWindow = () => {
    window.close();
  };
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <S.HomeWrapper>
      <Typography
        variant="h1"
        color={darkMode ? "#fff" : "#000"}
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
            colorLabel={darkMode ? "#B9B4C7" : "#352F44"}
            onChange={(e) => handleValidatePassword(e.target.value)}
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
            colorLabel={darkMode ? "#B9B4C7" : "#352F44"}
            onChange={(e) => handleValidatePassword(e.target.value)}
          />
          {signal && (
            <span
              style={{
                color: "red",
                fontSize: "12px",
                width: "280px",
                display: "block",
              }}
            >
              * Mật khẩu phải bao gồm từ 8 đến 32 ký tự, chứa 1 chữ cái viết
              hoa, chứa 1 kí tự đặc biệt.*{" "}
            </span>
          )}
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
            $margin="30px 0 0 0"
            $width={"100px"}
            $color={darkMode ? "#000" : "#000"}
            $backgroundColor="#FAF0E6"
            $hoverColor={darkMode ? "#000" : "#fff"}
            $borderColor={darkMode ? "#fff" : "#352f44"}
            $hoverBackgroundColor={darkMode ? "#F7D600" : "#000"}
          >
            LƯU
          </Button>
        </FormItem>
      </Form>
    </S.HomeWrapper>
  );
}

export default FormReset;
