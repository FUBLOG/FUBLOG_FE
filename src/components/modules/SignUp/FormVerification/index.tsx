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
  readonly setNextStep: Dispatch<SetStateAction<string>>;
  readonly formData: any;
}

function FormVerification(props: PageProps) {
  const handleClick = () => {
    props.setNextStep("signup");
  };
  const [targetTime, setTargetTime] = useState<number>(Date.now() + 60 * 1000);

  const [finish, setFinish] = useState<boolean>(false);
  const onFinish = () => {
    setFinish(true);
  };
  const router = useRouter();

  useEffect(() => {
    const socket = io("https://has.io.vn");

    socket.on(`${props?.formData?.email}`, handleEmailVerify);
    return () => {
      if (socket) {
        socket.close();
      }
    };
  });
  const handleEmailVerify = async (...arg: any[]) => {
    console.log(arg);
    if (arg[0] === "Signup successfully") {
      message.success("Đăng ký thành công");
      router.push("/sign-in");
    }
  };

  const resend = async () => {
    setFinish(false);
    setTargetTime(Date.now() + 60 * 1000);
    try {
      const data = {
        firstName: props?.formData?.firstName!,
        lastName: props?.formData?.lastName!,
        email: props?.formData?.email!,
        password: props?.formData?.password!,
        dateOfBirth: props?.formData?.dateOfBirth!,
        sex: props?.formData.sex!,
      };
      await postRequest(constants.API_SERVER + authEndpoint.SIGN_UP, {
        data,
      });
      props.setNextStep("verification");
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
        Xác thực email
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
          <Link href="/sign-up">
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
                Đăng ký lại
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
