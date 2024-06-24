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
  setUserInfo: () => { },
  loading: false,
  setLoading: () => { },
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const isUser = async () => {
      const token = await webStorageClient.getToken();
      if (token) {
        try {
          setLoading(true);
          const res: any = await checkAuth();
          webStorageClient.set(constants.IS_AUTH, true);
          setUserInfo({
            userId: res?.metadata?._id,
            dateOfBirth: res?.metadata?.dateOfBirth,
            displayName: res?.metadata?.displayName,
            email: res?.metadata?.email,
            firstName: res?.metadata?.firstName,
            lastName: res?.metadata?.lastName,
            profileHash: res?.metadata?.profileHash,
            sex: res?.metadata?.sex,
            userInfo: {
              avatar: res?.metadata?.userInfo?.avatar,
              blockList: res?.metadata?.userInfo?.blockList,
              friendList: res?.metadata?.userInfo?.friendList,
            },
          });
        } catch (error) {
          webStorageClient.set(constants.IS_AUTH, false);
        }
      } else {
        webStorageClient.set(constants.IS_AUTH, false);
      }
      setLoading(false);

    };
    isUser();

  }, []);

  const authContextValue = useMemo(
    () => ({
      userInfo,
      setUserInfo,
      loading,
      setLoading
    }),
    [userInfo, setUserInfo, loading, setLoading]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
