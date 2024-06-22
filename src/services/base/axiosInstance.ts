import {authEndpoint } from "@/services/endpoint";
import axios from "axios";

import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import webLocalStorage from "@/utils/webLocalStorage";
import deleteStorage from "@/utils/deleteStorage";

const axiosInstance = axios.create({
  baseURL: constants.API_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 600000,
});

axiosInstance.interceptors.request.use(async function (config: any) {
  const accessToken = await webStorageClient.getToken();
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  async (response: any) => {
    return response?.data;
  },
  async (error: any) => {
    if (error?.response && error?.response?.status === 401) {
      if (error?.response?.data?.message === "JWT invalid") {
        try {
          const newAccessToken = await refreshAccessToken();
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance(error.config);
        } catch (e) {
          deleteStorage();
          return Promise.reject(e);
        }
      }
      if (error?.response?.data?.message === "Invalid request") {
        deleteStorage();
      }
    }
  }
);

const refreshAccessToken = async () => {
  const clientId = await webStorageClient.getProfileHash();
  const refreshToken = webLocalStorage.get("refreshToken");
  const privateKey = webLocalStorage.get("privateKey");

  return axios
    .post(
      constants.API_SERVER + authEndpoint.REFRESH_TOKEN,
      {},
      {
        headers: {
          "x-client-id": clientId,
          "x-rtoken-id": refreshToken,
          "x-private-key": privateKey,
        },
      }
    )
    .then((response) => {
      const newAccessToken = response?.data?.metadata?.tokens?.accessToken;
      webStorageClient.setToken(newAccessToken);
      webLocalStorage.set(
        "refreshToken",
        response?.data?.metadata?.tokens?.refreshToken
      );
      return newAccessToken;
    })
    .catch((error) => {
      const message =
        typeof error?.message === "string"
          ? error.message
          : "An error occurred";
      throw new Error(message);
    });
};

export default axiosInstance;
