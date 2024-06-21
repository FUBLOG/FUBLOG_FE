import { useState } from "react";
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
    blockList: [];
    friendList: [];
  };
}
export const useAuth = () => {
  const { addUser, removeUser } = useUser();
  const [loading, setLoading] = useState(false);

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

  return { login, logout, loading };
};
