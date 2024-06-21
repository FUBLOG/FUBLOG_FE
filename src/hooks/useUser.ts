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
    isUser();
  }, []);

  const isUser = async () => {
    const token = await webStorageClient.getToken();
    if (token) {
      console.log("có token");

      try {
        const res: any = await getRequest(authEndpoint.AUTH_TOKEN, {
          security: true,
        });
        if (res) {
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
        } else {
          throw new Error("Invalid user data");
        }
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
    webStorageClient.setProfileHash(user.PROFILE_HASH, { maxAge: 7 * 24 * 60 });
    webStorageClient.setToken(user.ACCESS_TOKEN);
    webLocalStorage.set("refreshToken", user.REFRESH_TOKEN);
    webLocalStorage.set("privateKey", user.PRIVATEKEY);
    webStorageClient.set(constants.IS_AUTH, true);
    setUserInfo(userInfo);
  };

  const removeUser = async () => {
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
  };

  return { userInfo, addUser, removeUser, setUserInfo, isUser };
};
