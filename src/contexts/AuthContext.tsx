import React, { createContext, useState, ReactNode, useMemo, use, useContext } from "react";

interface AuthContextProps {
  userInfo: any | null;
  setUserInfo: (userInfo: {} | null) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  userInfo: null,
  setUserInfo: async () => { },
});
export const useAuthContext = () => {
  return useContext(AuthContext);
}
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<any | null>(null);
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
