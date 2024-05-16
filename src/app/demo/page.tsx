"use client";

import Button from "@/components/core/common/Button";
import React from "react";
import * as S from "./style";
import { Flex } from "antd";
import { PhoneOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import InputNumber from "@/components/core/common/form/InputNumber";
import Typography from "@/components/core/common/Typography";
import Input from "@/components/core/common/form/Input";
import InputPassword from "@/components/core/common/form/InputPassword";
import PhoneNumber from "@/components/core/common/form/PhoneNumber";

function Page() {
  return (
    <S.Wrapper align="flex-start" vertical gap={"10px"}>
      <Flex gap={8} vertical>
        <Typography variant="h5" color="red">
          BUTTON{" "}
        </Typography>
        <Button type="text">Đăng nhập text button</Button>
        <Button type="default">ĐĂNG NHẬP</Button>
        <Button type="default" $backgroundColor="#FAF0E6">
          ĐĂNG NHẬP
        </Button>

        <Button type="primary" loading>
          ĐĂNG NHẬP
        </Button>
        <Button type="primary"> ĐĂNG NHẬP</Button>

        <Button type="dashed">ĐĂNG NHẬP</Button>
        <Button type="link">ĐĂNG NHẬP Link button</Button>
      </Flex>

      <Flex gap={8} vertical>
        <Typography variant="h5" color="red">
          Input
        </Typography>
        <Input
          placeholder="Input text"
          prefix={<UserOutlined />}
          isRequired
          label="Tên người dùng"
        />
        <InputNumber isRequired label="Ngày tháng năm sinh" />
        <InputPassword
          placeholder="Nhập số điện thoại"
          prefix={<LockOutlined />}
          isRequired
          label="Mật khẩu"
        />
        <PhoneNumber
          currentInstanceForm={undefined}
          isRequired
          label="Số điện thoại"
        />
        <Input
          placeholder="Nhập số điện thoại"
          prefix={<PhoneOutlined />}
          isRequired
          label="Số điện thoại"
        />
        <Input placeholder="Viết bình luận..." label="Viết bình luận" />
      </Flex>
    </S.Wrapper>
  );
}

export default Page;
