import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useContext,
} from "react";

interface UserInfo {
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

interface AuthContextProps {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultUserInfo: UserInfo = {
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
};

export const AuthContext = createContext<AuthContextProps>({
  userInfo: defaultUserInfo,
  setUserInfo: () => {},
  loading: false,
  setLoading: () => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);
  const [loading, setLoading] = useState<boolean>(false);

  const authContextValue = useMemo(
    () => ({
      userInfo,
      setUserInfo,
      loading,
      setLoading,
    }),
    [userInfo, loading]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
