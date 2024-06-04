import axios from "axios";

import { constants } from "@/settings";

const axiosInstance = axios.create({
  baseURL: constants.API_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 600000,
});

axiosInstance.interceptors.request.use(
  function (config: any) {
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response?.data;
  },
  (error: any) => {
    //implement logic if receive error
    return Promise.reject(error);
  }
);

export default axiosInstance;
