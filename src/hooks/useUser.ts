import { useEffect } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { getRequest } from "@/services/request";
import { constants } from "@/settings";
import webLocalStorage from "@/utils/webLocalStorage";
import webStorageClient from "@/utils/webStorageClient";
import { authEndpoint } from "@/services/endpoint";

export const useUser = () => {
  const { userInfo, setUserInfo } = useAuthContext();
  useEffect(() => {
    const isUser = async () => {
      const token = await webStorageClient.getToken();
      if (token) {
        try {
          const res: any = await getRequest(authEndpoint.AUTH_TOKEN, {
            security: true,
          });
          if (res) {
            webStorageClient.set(constants.IS_AUTH, true);
            setUserInfo(res?.metadata);
          } else {
            throw new Error("Invalid user data");
          }
        } catch (error) {
          webStorageClient.set(constants.IS_AUTH, false);
          setUserInfo(null);
        }
      } else {
        webStorageClient.set(constants.IS_AUTH, false);
        setUserInfo(null);
      }
    };
    isUser();
  }, [setUserInfo]);

  const addUser = (user: {
    ACCESS_TOKEN: string;
    PROFILE_HASH: string;
    REFRESH_TOKEN?: string;
    PRIVATEKEY?: string;
  }) => {
    webStorageClient.setProfileHash(user.PROFILE_HASH, { maxAge: 7 * 24 * 60 });
    webStorageClient.setToken(user.ACCESS_TOKEN, { maxAge: 7 * 24 * 60 });
    webLocalStorage.set("refreshToken", user.REFRESH_TOKEN);
    webLocalStorage.set("privateKey", user.PRIVATEKEY);
    webStorageClient.set(constants.IS_AUTH, true);
    setUserInfo({ name: webStorageClient.get(constants.PROFILE_HASH) });
  };

  const removeUser = () => {
    webStorageClient.remove(constants.ACCESS_TOKEN);
    webStorageClient.remove(constants.PROFILE_HASH);
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("privateKey");
    webStorageClient.set(constants.IS_AUTH, false);
    setUserInfo(null);
  };

  return { userInfo, addUser, removeUser, setUserInfo };
};
