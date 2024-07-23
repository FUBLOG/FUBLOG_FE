"use client";

import { LockOutlined } from "@ant-design/icons";
import { Form, Spin, message } from "antd";
import FormItem from "antd/es/form/FormItem";

import InputPassword from "@/components/core/common/form/InputPassword";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";

import * as S from "./styles";
import { patchRequest } from "@/services/request";
import { userEndpoint } from "@/services/endpoint";
import { useState } from "react";
import useThemeStore from "@/hooks/useTheme";

function FormReset() {
  const [loading, setLoading] = useState(false);
  const [validatePassword, setValidatePassword] = useState<boolean | null>(
    null
  );
  const handlePasswordChange = (value: any) => {
    const regrex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
    if (!regrex.test(value)) {
      setValidatePassword(false);
    } else {
      setValidatePassword(true);
    }
    console.log(validatePassword);
  };

  async function onFinish(values: any): Promise<void> {
    if (validatePassword) {
      const data = {
        oldPassword: values?.oldPassword!,
        password: values?.newPassword!,
        confirmPassword: values?.confirmPassword!,
      };
      setLoading(true);

      await patchRequest(userEndpoint.CHANGE_PASSWORD, {
        data,
        security: true,
      })
        .then(() => {
          message.success("Thay đổi mật khẩu thành công");
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      message.info(
        "Mật khẩu phải bao gồm từ 8 đến 32 kí tự, 1 chữ viết hoa, 1 kí tự đặc biệt."
      );
    }
  }

  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <>
      <Spin spinning={loading} fullscreen></Spin>
      <S.HomeWrapper>
        <Typography
          variant="h1"
          color={darkMode ? "#F7D600" : "#000"}
          fontSize="x-large"
          align="center"
        >
          THAY ĐỔI MẬT KHẨU
        </Typography>

        <Form
          name="basic"
          style={{ width: "100%" }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <FormItem
            name="oldPassword"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <InputPassword
              placeholder="Nhập mật khẩu"
              prefix={<LockOutlined />}
              isRequired
              label="Mật khẩu cũ"
              colorLabel={darkMode ? "#F7D600" : "#000"}
            />
          </FormItem>
          <FormItem
            name="newPassword"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <InputPassword
              placeholder="Nhập mật khẩu"
              colorLabel={darkMode ? "#F7D600" : "#000"}
              prefix={<LockOutlined />}
              isRequired
              label="Nhập mật khẩu mới"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </FormItem>

          <FormItem
            name="confirmPassword"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <InputPassword
              placeholder="Nhập lại mật khẩu"
              prefix={<LockOutlined />}
              isRequired
              label="Nhập lại mật khẩu mới"
              colorLabel={darkMode ? "#F7D600" : "#000"}
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
              $borderColor={darkMode ? "#fff" : "#352f44"}
              $hoverBackgroundColor={darkMode ? "#F7D600" : "#000"}
              $hoverColor={darkMode ? "#000" : "#fff"}
              $color={darkMode ? "#fff" : "#000"}
              $backgroundColor={darkMode ? "#000" : "#fff"}
              $margin="30px 0 0 0"
              $width={"100px"}
            >
              LƯU
            </Button>
          </FormItem>
        </Form>
      </S.HomeWrapper>
    </>
  );
}

export default FormReset;
