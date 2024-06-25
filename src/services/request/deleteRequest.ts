import axiosInstance from "../base/axiosInstance";
import { RequestOptionsInterface } from "@/model/requestOptions";
import webStorageClient from "@/utils/webStorageClient";
import { message } from "antd";
import { errorMessage } from "../errorMessage";
import { constants } from "@/settings";

const deleteRequest = async (
  url: string,
  options?: RequestOptionsInterface,
  fomrData?: boolean
): Promise<object> => {
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
    .delete(url, {
      data,
      headers: {
        ...headers,
      },
    })
    .then((res: any) => {
      return res;
    })
    .catch((err) => {
      message.error(errorMessage[err?.message]);
      return Promise.reject(err);
    });
};

export { deleteRequest };
