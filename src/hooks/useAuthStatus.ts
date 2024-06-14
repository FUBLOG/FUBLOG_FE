import { useUser } from "./useUser";

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
    blockList: [""];
    friendList: [""];
  };
}
export const useAuth = () => {
  const { userInfo, addUser, removeUser, setUserInfo } = useUser();

  const login = (key: Key, userInfo: UserInfo) => {
    addUser(key, userInfo);
  };

  const logout = () => {
    removeUser();
  };

  return { userInfo, login, logout, setUserInfo };
};
