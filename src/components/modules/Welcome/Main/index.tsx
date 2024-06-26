"use client";

import { useSearchParams } from "next/navigation";

import { authEndpoint } from "@/services/endpoint";
import { constants } from "@/settings";
import { getRequest } from "@/services/request";

import { useEffect } from "react";

const Welcome = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
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
      window.close();
    } catch (error) {}
  };
  useEffect(() => {
    handleVerify();
  });
  return <>Hello verification</>;
};

export default Welcome;
