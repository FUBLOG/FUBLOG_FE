import { useUser } from "./useUser";

export interface Key {
  ACCESS_TOKEN: string;
  PROFILE_HASH: string;
  REFRESH_TOKEN?: string;
  PRIVATEKEY?: string;
}

export const useAuth = () => {
  const { userInfo, addUser, removeUser, setUserInfo } = useUser();

  const login = (key: Key) => {
    addUser(key);
  };

  const logout = () => {
    removeUser();
  };

  return { userInfo, login, logout, setUserInfo };
};
