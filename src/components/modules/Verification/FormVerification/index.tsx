"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Statistic, message } from "antd";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import verImg from "@/public/verified.png";
import { postRequest } from "@/services/request";
import { authEndpoint } from "@/services/endpoint";
import { constants } from "@/settings";

import * as S from "./styles";

const { Countdown } = Statistic;
interface PageProps {
  readonly setStatus: Dispatch<SetStateAction<string>>;
  readonly email: string;
}

function FormVerification(props: PageProps) {
  const handleClick = () => {
    props.setStatus("forgot");
  };
  const [targetTime, setTargetTime] = useState<number>(Date.now() + 60 * 1000);
  const maskEmail = (email: string): string => {
    const [user, domain] = props.email.split("@");
    if (user.length <= 2) return email;
    const maskedUser = `${user[0]}${user[1]}****${user[user.length - 1]}`;
    return `${maskedUser}@${domain}`;
  };
  const [finish, setFinish] = useState<boolean>(false);
  const onFinish = () => {
    setFinish(true);
  };
  const router = useRouter();

  useEffect(() => {
    const socket = io("https://has.io.vn");

    socket.on(`${props?.email}`, handleEmailVerify);
    return () => {
      if (socket) {
        socket.close();
      }
    };
  });
  const handleEmailVerify = async (...arg: any[]) => {
    if (arg[0] === "Reset password successfully") {
      message.success("Đặt lại mật khẩu thành công");
      router.push("/sign-in");
    }
  };

  const resend = async () => {
    setFinish(false);
    setTargetTime(Date.now() + 60 * 1000);
    try {
      const data = {
        email: props?.email!,
      };
      await postRequest(constants.API_SERVER + authEndpoint.FORGOT_PASSWORD, {
        data,
      });
      props.setStatus("verification");
    } catch (error) {}
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
          Một email xác nhận đã được gửi tới {maskEmail(props.email)}, vui lòng
          kiểm tra hộp thư đến và nhấn xác nhận theo hướng dẫn.
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
        <>
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
          <Link href="/verification">
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
                onClick={handleClick}
              >
                <ArrowLeftOutlined style={{ fontSize: "10px" }} />
              </Button>
              <Typography
                style="italic"
                variant="body-text-normal"
                color="#B9B4C7"
                fontSize="xx-small"
              >
                Thay đổi email
              </Typography>
            </S.Typography>
          </Link>
        </>
      ) : (
        <Countdown
          onFinish={onFinish}
          className="countdown-item"
          format="mm:ss"
          value={targetTime}
        />
      )}
    </S.HomeWrapper>
  );
}

export default FormVerification;
