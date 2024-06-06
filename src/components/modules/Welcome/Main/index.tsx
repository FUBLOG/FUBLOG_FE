"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button, message } from "antd";

import { authEndpoint } from "@/services/endpoint";
import { constants } from "@/settings";
import { getRequest } from "@/services/request";

import { useEffect } from "react";

const Welcome = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const handleVerify = async () => {
    try {
      const options = {
        params: {
          token,
        }!,
      };
      await getRequest(
        constants.API_SERVER + authEndpoint.VERIFY_TOKEN,
        options
      );
      message.success("Đăng ký thành công");
    } catch (error) {}
  };
  useEffect(() => {
    handleVerify();
  });
  return <></>;
};

export default Welcome;
