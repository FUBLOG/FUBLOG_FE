import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useContext,
} from "react";

interface AuthContextProps {
  userInfo: {
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
      blockList: [""];
      friendList: [""];
    };
  };
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
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
        blockList: [""];
        friendList: [""];
      };
    }>
  >;
}

export const AuthContext = createContext<AuthContextProps>({
  userInfo: {
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
      blockList: [""],
      friendList: [""],
    },
  },
  setUserInfo: async () => {},
});
export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<{
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
      blockList: [""];
      friendList: [""];
    };
  }>({
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
      blockList: [""],
      friendList: [""],
    },
  });
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
