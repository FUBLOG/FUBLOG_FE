import { message } from "antd";
import { RequestOptionsInterface } from "@/model/requestOptions";
import webStorageClient from "@/utils/webStorageClient";
import axiosInstance from "../base/axiosInstance";
import { errorMessage } from "../errorMessage";
import { constants } from "@/settings";

const patchRequest = async (
  url: string,
  options?: RequestOptionsInterface,
  fomrData?: boolean
) => {
  const isSecurity = options?.security || false;

  let header = {};
  if (isSecurity) {
    const profileHash = await webStorageClient.getProfileHash();

    header = {
      "x-client-id": profileHash,
    };
  }

  const data = options?.data;
  const tokenClient = webStorageClient.get(constants.ACCESS_TOKEN);
  let headers: any = {
    "Content-Type": fomrData ? "multipart/form-data" : "application/json",
    ...header,
  };

  if (tokenClient) headers.Authorization = `Bearer ${tokenClient}`;

  return axiosInstance
    .patch(url, data, {
      headers: headers,
      withCredentials: true,
    })
    .then((res: any) => {
      if (res?.statusCode >= 400 || res?.code >= 400) {
        return Promise.reject(res);
      } else {
        return res;
      }
    })
    .catch((err: any) => {
      message.error(errorMessage[err?.message]);
      return Promise.reject(err);
    });
};

export { patchRequest };
