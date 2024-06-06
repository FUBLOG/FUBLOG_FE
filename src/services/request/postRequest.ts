import { message } from "antd";
import { RequestOptionsInterface } from "@/model/requestOptions";
import webStorageClient from "@/utils/webStorageClient";
import axiosInstance from "../base/axiosInstance";
import { errorMessage } from "../errorMessage";
import { constants } from "@/settings";

const postRequest = (
  url: string,
  options?: RequestOptionsInterface,
  fomrData?: boolean
): Promise<object> => {
  // kaidophan37@gmail.com
  // 123456
  const data = options?.data;
  const tokenClient = webStorageClient.get(constants.ACCESS_TOKEN);
  let headers: any = {
    "Content-Type": fomrData ? "multipart/form-data" : "application/json",
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
      message.error(errorMessage[err?.message]);

      return Promise.reject(err);
    });
};

export { postRequest };
