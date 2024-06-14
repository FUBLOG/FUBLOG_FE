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
    friendList: [{ friend_id: "", displayName: "", avatar: "", _id: "" }];
  };
}

interface AuthContextProps {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
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
    friendList: [{ friend_id: "", displayName: "", avatar: "", _id: "" }],
  },
};

export const AuthContext = createContext<AuthContextProps>({
  userInfo: defaultUserInfo,
  setUserInfo: () => { },
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);

  const authContextValue = useMemo(
    () => ({
      userInfo,
      setUserInfo,
    }),
    [userInfo, setUserInfo]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

