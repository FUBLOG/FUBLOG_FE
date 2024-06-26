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

function FormReset() {
  const [loading, setLoading] = useState(false);

  async function onFinish(values: any): Promise<void> {
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
  }

  return (
    <>
      <Spin spinning={loading} fullscreen></Spin>
      <S.HomeWrapper>
        <Typography
          variant="h1"
          color="#B9B4C7"
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
            />
          </FormItem>
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
    </>
  );
}

export default FormReset;
