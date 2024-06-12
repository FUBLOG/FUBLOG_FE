import React, { createContext, useState, ReactNode, useMemo } from "react";
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
  const authContextValue = useMemo(
    () => ({ userInfo, setUserInfo }),
    [userInfo, setUserInfo]
  );
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
