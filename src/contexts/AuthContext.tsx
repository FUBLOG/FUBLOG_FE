import React, { createContext, useState, ReactNode } from "react";
import { User } from "@/hooks/useUser";

interface AuthContextProps {
  userInfo: User | null;
  setUserInfo: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  userInfo: null,
  setUserInfo: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
