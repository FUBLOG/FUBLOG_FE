import { useAuthContext } from "@/contexts/AuthContext";
import { constants } from "@/settings";
import webLocalStorage from "@/utils/webLocalStorage";
import webStorageClient from "@/utils/webStorageClient";

export interface Key {
  ACCESS_TOKEN: string;
  PROFILE_HASH: string;
  REFRESH_TOKEN?: string;
  PRIVATEKEY?: string;
}
export interface UserInfo {
  _id: string;
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
  const { setUserInfo, setLoading, loading } = useAuthContext();
  const addUser = async (
    user: {
      ACCESS_TOKEN: string;
      PROFILE_HASH: string;
      REFRESH_TOKEN?: string;
      PRIVATEKEY?: string;
    },
    userInfo: {
      _id: string;
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
    webStorageClient.setProfileHash(user.PROFILE_HASH, {
      maxAge: 7 * 24 * 60,
    });
    webStorageClient.setToken(user.ACCESS_TOKEN);
    webLocalStorage.set("refreshToken", user.REFRESH_TOKEN);
    webLocalStorage.set("privateKey", user.PRIVATEKEY);
    webStorageClient.set(constants.IS_AUTH, true);
    setUserInfo(userInfo);
    setLoading(false);
  };

  const removeUser = async () => {
    setLoading(true);

    webStorageClient.remove(constants.ACCESS_TOKEN);
    webStorageClient.remove(constants.PROFILE_HASH);
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("privateKey");
    webStorageClient.set(constants.IS_AUTH, false);
    setUserInfo({
      _id: "",
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
    setLoading(false);
  };

  const login = async (key: Key, userInfo: UserInfo) => {
    setLoading(true);
    console.log("userInfo", userInfo);

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
