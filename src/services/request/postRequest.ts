import { message } from "antd";
import { RequestOptionsInterface } from "@/model/requestOptions";
import webStorageClient from "@/utils/webStorageClient";
import axiosInstance from "../base/axiosInstance";
import { errorMessage } from "../errorMessage";
import { constants } from "@/settings";

const postRequest = async (
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
    .post(url, data, {
      headers: headers,
      withCredentials: true,
    })
    .then((res: any) => {
      return res;
    })
    .catch((err) => {
      message.error(errorMessage[err]);
      return Promise.reject(err);
    });
};

const newpostRequest = async (
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
  try {
    return await axiosInstance.post(url, data, {
      headers: headers,
      withCredentials: true,
    });
  } catch (err) {
    message.error(errorMessage[err as any]);
    return (err);
  }
};

export { postRequest };
