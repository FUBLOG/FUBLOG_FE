import axiosInstance from "../base/axiosInstance";
import { RequestOptionsInterface } from "@/model/requestOptions";
import webStorageClient from "@/utils/webStorageClient";
import { message } from "antd";

const getRequest = (
  url: string,
  options?: RequestOptionsInterface
): Promise<object> => {
  const params = options?.params;

  const tokenClient = webStorageClient.getToken();
  // url endpoint to run method
  // options
  // headers { content method authorization cookies session method}
  // credentials server info

  // body
  if (tokenClient) {
    return axiosInstance
      .get(url, {
        params: params,
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      })
      .then((res: any) => {
        if (res?.message) {
          //todo addition in need
        }
        return res;
      })
      .catch((err) => {
        if (err?.response?.data?.errors?.length > 0) {
          err?.response?.data?.errors?.forEach((mess: string) => {
            //todo addition in need
          });
        }
        return Promise.reject(err);
      });
  }

  return axiosInstance
    .get(url, {
      params: params,
      headers: {},
    })
    .then((res: any) => {
      if (res?.message) {
        //todo addition in need
      }
      return res;
    })
    .catch((err) => {
      if (err?.response?.data?.errors?.length > 0) {
        err?.response?.data?.errors?.forEach((mess: string) => {
          //todo addition in need
        });
      }
      return Promise.reject(err);
    });
};

export { getRequest };
