"use client";

import { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Statistic } from "antd";

import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import verImg from "@/public/verified.png";

import * as S from "./styles";
import Image from "next/image";

const { Countdown } = Statistic;

function FormVerification() {
  const [targetTime, setTargetTime] = useState<number>(Date.now() + 60 * 1000);

  const [finish, setFinish] = useState<boolean>(false);
  const onFinish = () => {
    setFinish(true);
  };
  const resend = () => {
    setFinish(false);
    setTargetTime(Date.now() + 60 * 1000);
  };
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
          Một email xác nhận đã được gửi tới email ****274@gmail.com, vui lòng
          nhấn kiểm tra hộp thư đến và xác nhận theo hướng dẫn.
        </Typography>
      </S.Infor>
      <Typography
        style="italic"
        variant="body-text-small-normal"
        color="#B9B4C7"
        fontSize="xx-small"
        margin="30px 0px 0px 0px"
      >
        Không nhận được mail xác nhận? {finish === true ? "" : "Gửi lại sau"}
      </Typography>
      {finish === true ? (
        <Button
          className="ButtonWrapper"
          type="default"
          $backgroundColor="#FAF0E6"
          $width={"100px"}
          $margin="10px 0px"
          onClick={resend}
        >
          GỬI LẠI
        </Button>
      ) : (
        <Countdown
          onFinish={onFinish}
          className="countdown-item"
          format="mm:ss"
          value={targetTime}
        />
      )}
      <a href="/verification">
        <S.Typography
          style={{
            justifyContent: "center",
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
          <Typography
            style="italic"
            variant="body-text-normal"
            color="#B9B4C7"
            fontSize="xx-small"
          >
            Nhập lại email
          </Typography>
        </S.Typography>
      </a>
    </S.HomeWrapper>
  );
}

export default FormVerification;
