import { getFriendList } from "@/services/api/friend";
import { useEffect, useState } from "react";
import { useProfile } from "./useProfile";
import { getRequestFriend } from "@/services/api/friend";
import { useAuthContext } from "@/contexts/AuthContext";
import webLocalStorage from "@/utils/webLocalStorage";
import { constants } from "@/settings";

const useFriend = () => {
  const [isFriend, setIsFriend] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isMyUser, setIsMyUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSendFriend, setIsSendFriend] = useState(false);
  const [isRequester, setIsRequester] = useState(false);
  const { userInfo } = useAuthContext();
  const { profile } = useProfile();

  const checkIsGuest = async () => {
    if (!(userInfo?.userId === "")) {
      setIsGuest(true);
      return true;
    }
    setIsGuest(false);
    return false;
  };
  const checkIsFriend = async () => {
    const result: any = userInfo?.userInfo?.friendList.filter(
      (friend: string) => friend === profile?.user?._id
    );

    if (result?.length > 0) {
      setIsFriend(true);
      return true;
    }
    return false;
  };
  const handleRequest = async (request: any) => {
    if (request?.sourceID === userInfo?.userId) {
      setIsSendFriend(true);
    } else {
      setIsRequester(true);
    }
  };
  const checkRequest = async () => {
    const response = await getRequestFriend(profile?.user?._id);
    if (response?.metadata === null) {
      await checkIsFriend();
    } else {
      await handleRequest(response?.metadata);
    }
  };
  const checkFriend = async () => {
    if (!(await checkIsGuest())) {
      if (userInfo?.userId === profile?.user?._id) setIsMyUser(true);
      else {
        await checkRequest();
      }
    }
    console.log(isGuest, "is");
    console.log("profile", profile);
  };
  const resetStatus = () => {
    setIsFriend(false);
    setIsBlocked(false);
    setIsGuest(false);
    setIsMyUser(false);
    setIsSendFriend(false);
    setIsRequester(false);
  };
  useEffect(() => {
    resetStatus();
    checkFriend();
  }, [profile]);
  return {
    isRequester,
    isFriend,
    isBlocked,
    isGuest,
    isMyUser,
    isSendFriend,
    loading,
    setIsFriend,
  };
};
export const useGetFriendList = () => {
  const [friendList, setFriendList] = useState<any[]>([]);
  useEffect(() => {
    getFriendList().then((list: any) =>
      setFriendList(list?.metadata?.friendList)
    );
  }, []);
  return friendList;
};
export default useFriend;
