"use client";

import { LockOutlined } from "@ant-design/icons";
import { CheckboxProps, Form } from "antd";
import FormItem from "antd/es/form/FormItem";

import InputPassword from "@/components/core/common/form/InputPassword";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";

import * as S from "./styles";

function FormReset() {
  return (
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
      >
        <FormItem
          name="old-password"
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
          name="new-password"
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
          name="confirm-password"
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
