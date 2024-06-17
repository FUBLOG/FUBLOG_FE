import axiosInstance from "../base/axiosInstance";
import { RequestOptionsInterface } from "@/model/requestOptions";
import webStorageClient from "@/utils/webStorageClient";
import { message } from "antd";
import { errorMessage } from "../errorMessage";
import { constants } from "@/settings";

const getRequest = async <T>(
  url: string,
  options?: RequestOptionsInterface,
  formData?: boolean
): Promise<T> => {
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
      return res as T;
    })
    .catch((err) => {
      message.error(errorMessage[err?.message]);

      return Promise.reject(err);
    });
};

export { getRequest };
