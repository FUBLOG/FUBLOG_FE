"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, CheckboxProps, DatePicker, Form } from "antd";
import FormItem from "antd/es/form/FormItem";

import Input from "@/components/core/common/form/Input";
import InputPassword from "@/components/core/common/form/InputPassword";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";

import * as S from "./styles";

function FormSignUp() {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <S.HomeWrapper>
      <Typography
        variant="h1"
        color="#B9B4C7"
        fontSize="x-large"
        align="center"
      >
        ĐĂNG KÝ
      </Typography>

      <Form
        name="basic"
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <FormItem
          name="surname"
          rules={[{ required: true, message: "Không để trống ô này" }]}
        >
          <Input
            placeholder="Nhập họ"
            prefix={<UserOutlined />}
            isRequired
            label="Họ"
          />
        </FormItem>
        <FormItem
          name="name"
          rules={[{ required: true, message: "Không để trống ô này" }]}
        >
          <Input
            placeholder="Nhập tên"
            prefix={<UserOutlined />}
            isRequired
            label="Tên"
          />
        </FormItem>
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
        <FormItem
          name="birthday"
          rules={[
            { required: true, message: "Vui lòng nhập ngày tháng năm sinh" },
          ]}
        >
          <Typography
            padding="0 0 8px 0"
            variant="caption-small"
            color="#B9B4C7"
          >
            Nhập ngày tháng năm sinh <span style={{ color: "red" }}>*</span>
          </Typography>

          <DatePicker
            format={{
              format: "YYYY-MM-DD",
              type: "mask",
            }}
            placeholder="Nhập ngày"
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
          />
        </FormItem>
        <Checkbox onChange={onChange}>
          {" "}
          <Typography
            variant="body-text-small-normal"
            color="#B9B4C7"
            fontSize="xx-small"
          >
            Tôi đồng ý với các điều khoản của HaS?{" "}
            <a href="/sign-up">Điều khoản</a>
          </Typography>
        </Checkbox>

        <FormItem
          name="email"
          rules={[{ required: true, message: "Hãy nhập số điện thoại!" }]}
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
          >
            ĐĂNG KÝ
          </Button>
        </FormItem>
        <Typography
          variant="body-text-small-normal"
          color="#B9B4C7"
          fontSize="xx-small"
          align="center"
        >
          Đã có tài khoản? <a href="/sign-in">Đăng nhập</a>
        </Typography>
      </Form>
    </S.HomeWrapper>
  );
}

export default FormSignUp;
