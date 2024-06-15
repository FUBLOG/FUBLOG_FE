import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export interface User {
  _id: string;
  displayName: string;
  firstName: string;
  lastName: string;
  sex: string;
  dateOfBirth: string;
  profileHash: string;
}

export interface Info {
  address: string;
  avatar: string;
  cover_photo: string;
  bio: string;
  education: string;
  relationship: string;
  avatarList: string[];
  coverList: string[];
  friendList: Array<{
    friend_id: string;
    profileHash: string;
    avatar: string;
    displayName: string;
    _id: string;
  }>;
  blockList: Array<{
    friend_id: string;
    profileHash: string;
    avatar: string;
    displayName: string;
    _id: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface ProfileInfo {
  user: User;
  info: Info;
}

interface ProfileProps {
  profileInfo: ProfileInfo;
  setProfileInfo: Dispatch<SetStateAction<ProfileInfo>>;
}

const defaultProfileContext: ProfileInfo = {
  user: {
    _id: "",
    displayName: "",
    firstName: "",
    lastName: "",
    sex: "",
    dateOfBirth: "",
    profileHash: "",
  },
  info: {
    address: "",
    avatar: "",
    cover_photo: "",
    bio: "",
    education: "",
    relationship: "",
    avatarList: [],
    coverList: [],
    friendList: [],
    blockList: [],
    createdAt: "",
    updatedAt: "",
  },
};

const ProfileContext = createContext<ProfileProps>({
  profileInfo: defaultProfileContext,
  setProfileInfo: () => {},
});

export const useProfileContext = () => useContext(ProfileContext);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>(
    defaultProfileContext
  );

  const profileContext = useMemo(
    () => ({ profileInfo, setProfileInfo }),
    [profileInfo, setProfileInfo]
  );

  return (
    <ProfileContext.Provider value={profileContext}>
      {children}
    </ProfileContext.Provider>
  );
};
