"use client";
import { User, useUser } from "./useUser";
export interface Key {
  ACCESS_TOKEN: string;
  PROFILE_HASH: string;
  REFRESH_TOKEN?: string;
  PRIVATEKEY?: string;
}

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser();

  const login = (key: Key) => {
    addUser(key);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout, setUser };
};
