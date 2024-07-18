"use client";

import { useSearchParams } from "next/navigation";

import { authEndpoint } from "@/services/endpoint";
import { constants } from "@/settings";
import { getRequest } from "@/services/request";

import { useEffect, useState } from "react";
import { message } from "antd";
import Link from "next/link";

const Welcome = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [_, setCountdown] = useState(3);

  const handleVerify = async () => {
    try {
      const options = {
        params: {
          token,
        },
      };
      await getRequest(
        constants.API_SERVER + authEndpoint.VERIFY_TOKEN,
        options
      );
      message.success("Xác thực thành công");
      const intervalId = setInterval(() => {
        setCountdown((prevCountdown) => {
          message.info(`Trang xác thực sẽ đóng trong ${prevCountdown} giây.`);
          if (prevCountdown < 1) {
            window.close();
            clearInterval(intervalId);
          }
          return prevCountdown - 1;
        });
      }, 1000);
    } catch (error) {
      const intervalId = setInterval(() => {
        setCountdown((prevCountdown) => {
          message.info(`Trang xác thực sẽ đóng trong ${prevCountdown} giây.`);
          if (prevCountdown < 1) {
            window.close();
            clearInterval(intervalId);
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }
  };
  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <h1>Xin chào, đây là trang xác thực</h1>
      <div style={{ display: "flex", gap: "5px" }}>
        Nhấn vào
        <Link href={"/sign-in"} style={{ textDecoration: "underline" }}>
          {" "}
          đây{" "}
        </Link>
        để quay lại trang đăng nhập bằng cách thủ công{" "}
      </div>
    </div>
  );
};

export default Welcome;
