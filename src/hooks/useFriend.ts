import { getFriendList } from "@/services/api/friend";
import { useEffect, useState } from "react";
import { useGetProfile, useProfile } from "./useProfile";
import { getRequestFriend } from "@/services/api/friend";
import { message } from "antd";
import { useAuthContext } from "@/contexts/AuthContext";
import { useAuth } from "./useAuthStatus";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";

const useFriend = (profileHash: any) => {
  const [isFriend, setIsFriend] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isMyUser, setIsMyUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const [isSendFriend, setIsSendFriend] = useState(false);
  const [isRequester, setIsRequester] = useState(false);
  const { userInfo } = useAuthContext();
  const { profileSearch } = useGetProfile(profileHash);

  const [isNotFound, setIsNotFound] = useState(false);
  const checkIsGuest = () => {
    if (!webStorageClient.get(constants.IS_AUTH)) {
      setIsGuest(true);
      return true;
    }
    return false;
  };
  const checkIsFriend = () => {
    setIsFriend(
      userInfo?.userInfo?.friendList?.some(
        (friend: string) => friend === profileSearch?.user?._id
      )
    );
  };
  const handleRequest = (request: any) => {
    if (request?.sourceID === userInfo?._id) {
      setIsSendFriend(true);
    } else {
      setIsRequester(true);
    }
  };
  const checkRequest = async () => {
    const response = await getRequestFriend(profileSearch?.user?._id);
    if (response?.metadata === null) {
      await checkIsFriend();
    } else {
      await handleRequest(response?.metadata);
    }
  };
  const checkFriend = async () => {
    if (profileSearch?.user?._id === undefined) {
      setIsNotFound(true);
      return;
    }
    if (!(await checkIsGuest())) {
      if (userInfo?._id === profileSearch?.user?._id) {
        setIsMyUser(true);
      } else {
        await checkRequest();
      }
    }
  };
  const resetStatus = async () => {
    setIsFriend(false);
    setIsBlocked(false);
    setIsGuest(false);
    setIsMyUser(false);
    setIsSendFriend(false);
    setIsRequester(false);
    setIsNotFound(false);
  };
  useEffect(() => {
    const asyncFn = async () => {
      setLoading(true);
      await resetStatus();
      await checkFriend();
      setLoading(false);
    };
    asyncFn();
  }, [profileSearch]);
  return {
    isRequester,
    isFriend,
    isBlocked,
    isGuest,
    isMyUser,
    isSendFriend,
    loading,
    checkFriend,
    setIsFriend,
    setLoading,
    setIsSendFriend,
    setIsRequester,
    setIsGuest,
    resetStatus,
    setIsMyUser,
    isNotFound,
  };
};

export default useFriend;
