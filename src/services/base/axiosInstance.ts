import axios from "axios";

import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import webLocalStorage from "@/utils/webLocalStorage";
import { addFriendEndpoint, authEndpoint } from "../endpoint";
import deleteStorage from "@/utils/deleteStorage";

const axiosInstance = axios.create({
  baseURL: constants.API_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 600000,
});

axiosInstance.interceptors.request.use(
  async function (config: any) {
    const accessToken = await webStorageClient.getToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error: any) {}
);

axiosInstance.interceptors.response.use(
  async (response: any) => {
    return response?.data;
  },
  async (error: any) => {
    if (error?.response && error?.response?.status === 401) {
      if (error?.response?.data?.message === "JWT invalid") {
        try {
          const newAccessToken = await refeshAccessToken();
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance(error.config);
        } catch (e) {
          deleteStorage();
        }
      }
      if (error?.response?.data?.message === "Invalid request") {
        deleteStorage();
      }
    }
  }
);

const refeshAccessToken = async () => {
  const clientId = await webStorageClient.getProfileHash();
  const refeshToken = webLocalStorage.get("refreshToken");
  const privateKey = webLocalStorage.get("privateKey");

  await axios
    .post(
      constants.API_SERVER + authEndpoint.REFRESH_TOKEN,
      {},
      {
        headers: {
          "x-client-id": clientId,
          "x-rtoken-id": refeshToken,
          "x-private-key": privateKey,
        },
      }
    )
    .then((response) => {
      webStorageClient.setToken(response?.data?.metadata?.tokens?.accessToken);
      webLocalStorage.set(
        "refreshToken",
        response?.data?.metadata?.tokens?.refreshToken
      );
      return response?.data?.metadata?.tokens?.accessToken;
    })
    .catch((error) => {
      throw new Error(error?.message);
    });
};
export const addFriend = async (sourceID: string, targetID: string) => {
  await axios
    .post(
      constants.API_SERVER + addFriendEndpoint.SEND_FRIEND,
      {
        sourceID,
        targetID,
      },
      {
        headers: {},
      }
    )
    .then((response) => {})
    .catch((error) => {
      throw new Error(error?.message);
    });
};
export default axiosInstance;
