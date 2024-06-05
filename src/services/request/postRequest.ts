import { message } from "antd";
import { RequestOptionsInterface } from "@/model/requestOptions";
import webStorageClient from "@/utils/webStorageClient";
import axiosInstance from "../base/axiosInstance";
import { errorMessage } from "../errorMessage";

const postRequest = (
  url: string,
  options?: RequestOptionsInterface,
  fomrData?: boolean
  fomrData?: boolean
): Promise<object> => {
  console.log(url);
  // kaidophan37@gmail.com
  // 123456
  console.log(url);
  // kaidophan37@gmail.com
  // 123456
  const data = options?.data;
  const tokenClient = webStorageClient.getToken();
  let headers: any = {
    "Content-Type": fomrData ? "multipart/form-data" : "application/json",
  };

  if (tokenClient) headers.Authorization = `Bearer ${tokenClient}`;
  let headers: any = {
    "Content-Type": fomrData ? "multipart/form-data" : "application/json",
  };

  if (tokenClient) headers.Authorization = `Bearer ${tokenClient}`;
  return axiosInstance
    .post(url, data, {
      headers: headers,
      withCredentials: true,
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
