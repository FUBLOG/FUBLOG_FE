"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "antd";

import { authEndpoint } from "@/services/endpoint";
import { constants } from "@/settings";
import { getRequest } from "@/services/request";

import * as S from "./styles";

const Welcome = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const handleVerify = async () => {
    try {
      const options = { param: token! };
      await getRequest(constants.API_SERVER + authEndpoint.VERIFY_TOKEN, {
        options,
      });
      router.push("/sign-in");
    } catch (error) {}
  };
  return (
    <>
      {!token ? (
        <S.HomeWrapper>Token không được cung cấp</S.HomeWrapper>
      ) : (
        <S.HomeWrapper>
          Chào mừng tới với HaS - mạng xã hội dành cho người Việt
          <Button onClick={handleVerify}>Xác thực</Button>
        </S.HomeWrapper>
      )}
    </>
  );
};

export default Welcome;
