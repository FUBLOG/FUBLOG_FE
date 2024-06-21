import { getFriendList } from "@/services/api/friend";
import { useEffect, useState } from "react";
import { useProfile } from "./useProfile";
import { getRequestFriend } from "@/services/api/friend";
import { message } from "antd";
import { useUser } from "./useUser";

const useFriend = () => {
  const [isFriend, setIsFriend] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isMyUser, setIsMyUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSendFriend, setIsSendFriend] = useState(false);
  const [isRequester, setIsRequester] = useState(false);
  const { userInfo } = useUser();
  const { profile } = useProfile();

  const checkIsGuest = async () => {
    console.log("check guest");
    message.info(userInfo?.userId);

    if ((await userInfo?.userId) === "") {
      message.info("guest");
      setIsGuest(true);
      return true;
    }
    message.info("user");
    return false;
  };
  const checkIsFriend = async () => {
    const result: any = userInfo?.userInfo?.friendList?.some(
      (friend: string) => friend === profile?.user?._id
    );

    if (result) {
      setIsFriend(true);

      return true;
    }

    return false;
  };
  const handleRequest = async (request: any) => {
    console.log("request?.sourceID", request?.sourceID);
    console.log("userInfo?.userId", userInfo?.userId);
    console.log(request?.sourceID === userInfo?.userId);
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
      console.log("setIsMyUser");

      console.log(userInfo?.userId === profile?.user?._id);

      if (userInfo?.userId === profile?.user?._id) {
        setIsMyUser(true);
      } else {
        await checkRequest();
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
    setLoading(true);
    resetStatus();
    checkFriend();
    setLoading(false);
    console.log(
      isRequester,
      isFriend,
      isBlocked,
      isGuest,
      isMyUser,
      isSendFriend
    );
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
    setLoading,
    setIsSendFriend,
    setIsRequester,
    setIsGuest,
    resetStatus,
    setIsMyUser,
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
