import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { getRequest } from "@/services/request";
import { constants } from "@/settings";
import webLocalStorage from "@/utils/webLocalStorage";
import webStorageClient from "@/utils/webStorageClient";
import { authEndpoint } from "@/services/endpoint";
import { Key } from "./useAuthStatus";
export interface User {
  name: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
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
            setUser({
              name: constants.PROFILE_HASH,
            });
          } else {
            throw new Error("Invalid user data");
          }
        } catch (error) {
          webStorageClient.set(constants.IS_AUTH, false);
          setUser(null);
        }
      } else {
        webStorageClient.set(constants.IS_AUTH, false);
        setUser(null);
      }
    };
    isUser();
  }, [setUser]);
  const addUser = (key: Key) => {
    webStorageClient.setProfileHash(key.PROFILE_HASH, {
      maxAge: 7 * 24 * 60,
    });
    webStorageClient.setToken(key.ACCESS_TOKEN, { maxAge: 7 * 24 * 60 });
    webLocalStorage.set("refreshToken", key.REFRESH_TOKEN);
    webLocalStorage.set("privateKey", key.PRIVATEKEY);
    webStorageClient.set(constants.IS_AUTH, true);
    setUser({
      name: constants.PROFILE_HASH,
    });
  };

  const removeUser = () => {
    webStorageClient.remove(constants.ACCESS_TOKEN);
    webStorageClient.remove(constants.PROFILE_HASH);
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("privateKey");
    setUser(null);
  };

  return { user, addUser, removeUser, setUser };
};
