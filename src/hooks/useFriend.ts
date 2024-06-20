import { useEffect, useState } from "react";
import { useUser } from "./useUser";
import { useProfile } from "./useProfile";
import { getRequest, postRequest } from "@/services/request";
import { friendEndpoint } from "@/services/endpoint";
import { useAuthContext } from "@/contexts/AuthContext";
import { getRequestFriend } from "@/services/api/friend";

const useFriend = () => {
  const [isFriend, setIsFriend] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isMyUser, setIsMyUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSendFriend, SetIsSendFriend] = useState(false);
  const [isRequester, SetIsRequester] = useState(false);
  const { userInfo } = useAuthContext();
  const { profile } = useProfile();

  useEffect(() => {
    const checkIsGuest = async () => {
      if (userInfo?.userId === "") {
        console.log("vao check dung");

        setIsGuest(true);
      }
    };
    const checkIsFriend = async () => {
      const result: any = userInfo?.userInfo?.friendList.find(
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
        SetIsSendFriend(true);
      } else {
        SetIsRequester(true);
      }
    };
    const checkRequest = async () => {
      const response = await getRequestFriend(profile?.user?._id);
      console.log(response);
      if (response?.metadata === null) {
        await checkIsFriend();
      } else {
        await handleRequest(response?.metadata);
      }
    };
    const checkFriend = async () => {
      await checkIsGuest();
      if (!isGuest) {
        await checkRequest();
      }
    };
    if (profile !== null) {
      checkFriend();
    }
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

export default useFriend;
