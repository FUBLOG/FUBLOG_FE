import { getFriendList } from "@/services/api/friend";
import { useEffect, useState } from "react";
import { useProfile } from "./useProfile";
import { useAuthContext } from "@/contexts/AuthContext";
import { getRequestFriend } from "@/services/api/friend";

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
    console.log(userInfo);
    if (userInfo?.userId === "") {
      console.log(1);

      setIsGuest(true);
      return true;
    }
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
      await checkRequest();
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
    if (profile !== null) {
      checkFriend();
    }
  }, [profile, userInfo?.userId]);
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
const useGetFriendList = () => {
  const [friendList, setFriendList] = useState<any[]>([]);
  useEffect(() => {
    getFriendList().then((list: any) =>
      setFriendList(list?.metadata?.friendList)
    );
  }, []);
  return friendList;
};
export { useGetFriendList };
export default useFriend;
