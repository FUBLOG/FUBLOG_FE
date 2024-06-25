import { checkAuth } from "@/services/api/auth";
import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useContext,
  useEffect,
} from "react";

interface UserInfo {
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

interface AuthContextProps {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultUserInfo: UserInfo = {
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
  useEffect(() => {
    if (webStorageClient.get(constants.IS_AUTH)) {
      setLoading(true);
      checkAuth().then((res) => {
        setUserInfo(res.metadata);

        setLoading(false);
      });
    }
  }, []);
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
