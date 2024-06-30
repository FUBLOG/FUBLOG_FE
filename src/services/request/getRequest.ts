import axiosInstance from "../base/axiosInstance";
import { RequestOptionsInterface } from "@/model/requestOptions";
import webStorageClient from "@/utils/webStorageClient";
import { message } from "antd";
import { errorMessage } from "../errorMessage";
import { constants } from "@/settings";

const getRequest = async (
  url: string,
  options?: RequestOptionsInterface,
  formData?: boolean
) => {
  const isSecurity = options?.security || false;

  let header = {};
  if (isSecurity) {
    const profileHash = await webStorageClient.getProfileHash();

    header = {
      "x-client-id": profileHash,
    };
  }

  const params = options?.params;

  const tokenClient = webStorageClient.get(constants.ACCESS_TOKEN);
  let headers: any = {
    "Content-Type": formData ? "multipart/form-data" : "application/json",
    ...header,
  };

  if (tokenClient) headers.Authorization = `Bearer ${tokenClient}`;

  return axiosInstance
    .get(url, {
      params: {
        ...params,
      },
      headers: {
        ...headers,
      },
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

export { getRequest };
