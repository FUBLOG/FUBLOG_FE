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
    setLoading(true);
    if (userInfo?.userId === "") {
      setIsGuest(true);
      return true;
    }
    setLoading(false);

    return false;
  };
  const checkIsFriend = async () => {
    setLoading(true);

    const result: any = userInfo?.userInfo?.friendList.filter(
      (friend: string) => friend === profile?.user?._id
    );

    if (result?.length > 0) {
      setIsFriend(true);
      setLoading(false);

      return true;
    }
    setLoading(false);

    return false;
  };
  const handleRequest = async (request: any) => {
    setLoading(true);

    if (request?.sourceID === userInfo?.userId) {
      setIsSendFriend(true);
      setLoading(false);
    } else {
      setIsRequester(true);
      setLoading(false);
    }
  };
  const checkRequest = async () => {
    const response = await getRequestFriend(profile?.user?._id);
    setLoading(true);

    if (response?.metadata === null) {
      await checkIsFriend();
      setLoading(false);
    } else {
      await handleRequest(response?.metadata);
      setLoading(false);
    }
  };
  const checkFriend = async () => {
    setLoading(true);

    if (!(await checkIsGuest())) {
      if (userInfo?.userId === profile?.user?._id) {
        setIsMyUser(true);
        setLoading(false);
      } else {
        await checkRequest();
        setLoading(false);
      }
    }
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
    checkFriend,
    setIsFriend,
  };
};
export const useGetFriendList = () => {
  const [friendList, setFriendList] = useState<any[]>([]);
  useEffect(() => {
    getFriendList().then((list) => setFriendList(list?.metadata?.friendList));
  }, []);
  return friendList;
};
export default useFriend;
