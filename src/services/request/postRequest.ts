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
  const isSecurity = options?.security || false;
  let header = {};
  if (isSecurity) {
    const accessToken = webStorageClient.getToken();
    const profileHash = webStorageClient.getProfileHash();

    header = {
      Authorization: "Bearer " + { accessToken },
      "x-client-id": { profileHash },
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
      message.error(errorMessage[err?.message]);

      return Promise.reject(err);
    });
};

export { postRequest };
