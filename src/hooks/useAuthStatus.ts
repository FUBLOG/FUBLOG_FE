import { useEffect, useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { getRequest } from "@/services/request";
import { constants } from "@/settings";
import webLocalStorage from "@/utils/webLocalStorage";
import webStorageClient from "@/utils/webStorageClient";
import { authEndpoint } from "@/services/endpoint";

export interface Key {
  ACCESS_TOKEN: string;
  PROFILE_HASH: string;
  REFRESH_TOKEN?: string;
  PRIVATEKEY?: string;
}
export interface UserInfo {
  userId: string;
  dateOfBirth: string;
  displayName: string;
  email: string;
  firstName: string;
  lastName: string;
  profileHash: string;
  sex: string;
  userInfo: {
    avatar: string;
    blockList: [];
    friendList: [];
  };
}
export const useAuth = () => {
  const { setUserInfo } = useAuthContext();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    isUser();
  }, []);

  const isUser = async () => {
    setLoading(true);
    const token = await webStorageClient.getToken();
    if (token) {
      try {
        const res: any = await getRequest(authEndpoint.AUTH_TOKEN, {
          security: true,
        });
        webStorageClient.set(constants.IS_AUTH, true);
        setUserInfo({
          userId: res?.metadata?._id,
          dateOfBirth: res?.metadata?.dateOfBirth,
          displayName: res?.metadata?.displayName,
          email: res?.metadata?.email,
          firstName: res?.metadata?.firstName,
          lastName: res?.metadata?.lastName,
          profileHash: res?.metadata?.profileHash,
          sex: res?.metadata?.sex,
          userInfo: {
            avatar: res?.metadata?.userInfo?.avatar,
            blockList: res?.metadata?.userInfo?.blockList,
            friendList: res?.metadata?.userInfo?.friendList,
          },
        });
      } catch (error) {
        webStorageClient.set(constants.IS_AUTH, false);
        setUserInfo({
          userId: "",
          dateOfBirth: "",
          displayName: "",
          email: "",
          firstName: "",
          lastName: "",
          profileHash: "",
          sex: "",
          userInfo: {
            avatar: "",
            blockList: [],
            friendList: [],
          },
        });
      }
    } else {
      webStorageClient.set(constants.IS_AUTH, false);
      setUserInfo({
        userId: "",
        dateOfBirth: "",
        displayName: "",
        email: "",
        firstName: "",
        lastName: "",
        profileHash: "",
        sex: "",
        userInfo: {
          avatar: "",
          blockList: [],
          friendList: [],
        },
      });
    }
    setLoading(false);
  };

  const addUser = async (
    user: {
      ACCESS_TOKEN: string;
      PROFILE_HASH: string;
      REFRESH_TOKEN?: string;
      PRIVATEKEY?: string;
    },
    userInfo: {
      userId: string;
      dateOfBirth: string;
      displayName: string;
      email: string;
      firstName: string;
      lastName: string;
      profileHash: string;
      sex: string;
      userInfo: {
        avatar: string;
        blockList: [];
        friendList: [];
      };
    }
  ) => {
    setLoading(true);

    webStorageClient.setProfileHash(user.PROFILE_HASH, { maxAge: 7 * 24 * 60 });
    webStorageClient.setToken(user.ACCESS_TOKEN);
    webLocalStorage.set("refreshToken", user.REFRESH_TOKEN);
    webLocalStorage.set("privateKey", user.PRIVATEKEY);
    webStorageClient.set(constants.IS_AUTH, true);
    setUserInfo(userInfo);
    setLoading(false);
  };

  const removeUser = async () => {
    setLoading(false);

    webStorageClient.remove(constants.ACCESS_TOKEN);
    webStorageClient.remove(constants.PROFILE_HASH);
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("privateKey");
    webStorageClient.set(constants.IS_AUTH, false);
    setUserInfo({
      userId: "",
      dateOfBirth: "",
      displayName: "",
      email: "",
      firstName: "",
      lastName: "",
      profileHash: "",
      sex: "",
      userInfo: {
        avatar: "",
        blockList: [],
        friendList: [],
      },
    });
    setLoading(true);
  };

  const login = async (key: Key, userInfo: UserInfo) => {
    setLoading(true);
    try {
      await addUser(key, userInfo);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await removeUser();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { login, logout, loading, setLoading };
};
