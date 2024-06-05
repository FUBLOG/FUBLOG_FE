import axiosInstance from "../base/axiosInstance";
import { RequestOptionsInterface } from "@/model/requestOptions";
import webStorageClient from "@/utils/webStorageClient";
import { message } from "antd";
import { errorMessage } from "../errorMessage";

const getRequest = (
  url: string,
  options?: RequestOptionsInterface,
  fomrData?: boolean
): Promise<object> => {
  const params = options?.params;

  const tokenClient = webStorageClient.getToken();
  // url endpoint to run method
  // options
  // headers { content method authorization cookies session method}
  // credentials server info

  let headers: any = {
    "Content-Type": fomrData ? "multipart/form-data" : "application/json",
  };

  if (tokenClient) headers.Authorization = `Bearer ${tokenClient}`;

  return axiosInstance
    .get(url, {
      params: params,
      headers: {},
    })
    .then((res: any) => {
      return res;
    })
    .catch((err) => {
      message.error(errorMessage[err?.message]);

      return Promise.reject(err);
    });
};

export { getRequest };
