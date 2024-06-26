"use client";

import { useSearchParams } from "next/navigation";

import { authEndpoint } from "@/services/endpoint";
import { constants } from "@/settings";
import { getRequest } from "@/services/request";

import { useEffect, useState } from "react";
import { message } from "antd";

const Welcome = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [countdown, setCountdown] = useState(3);

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
      message.error("Xác thực thất bại");
    }
  };
  useEffect(() => {
    handleVerify();
  });
  return <>Hello verification</>;
};

export default Welcome;
