"use client";

import { useSearchParams } from "next/navigation";
import * as S from "./styles";
import { Button } from "antd";
import { authEndpoint } from "@/services/endpoint";
import { constants } from "@/settings";
import { useRouter } from "next/navigation";
import { getRequest } from "@/services/request";
const Welcome = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const handleVerify = async () => {
    console.log(token);

    try {
      const options = { param: token! };
      const res: any = await getRequest(
        constants.API_SERVER + authEndpoint.VERIFY_TOKEN,
        { options }
      );
      console.log(res);
      router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
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
