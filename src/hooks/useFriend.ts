import { useEffect, useState } from "react";
import webStorageClient from "@/utils/webStorageClient";
import { useUser } from "./useUser";
import { useProfile } from "./useProfile";
import { useProfileContext } from "@/contexts/ProfileContext";
import { addFriend } from "@/services/base/axiosInstance";

const useFriend = () => {
  const { profileInfo } = useProfileContext();
  const { getUserInfo, profileHash } = useProfile();
  const { userInfo } = useUser();

  const [isFriend, setIsFriend] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isMyUser, setIsMyUser] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userInfo?.userId !== "") {
          setIsGuest(false);
          setIsFriend(
            profileInfo?.info?.friendList.some(
              (friend: { profileHash: string }) =>
                friend.profileHash === userInfo?.profileHash
            )
          );
          setIsBlocked(
            profileInfo?.info?.blockList.some(
              (blocked) => blocked.profileHash === userInfo?.profileHash
            )
          );
          setIsMyUser(
            userInfo?.profileHash === profileInfo?.user?.profileHash.at(0)
          );
        } else {
          setIsGuest(true);
        }
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      }
    };

    if (profileHash) {
      getUserInfo(profileHash);
    }

    fetchData();
  }, [userInfo, profileInfo, profileHash, getUserInfo]);
  const sendFriend = async (targetID: string) => {
    try {
      const response = await addFriend(userInfo?.userId, targetID);
      console.log("Friend request sent:", response);
    } catch (error) {
      console.error("Failed to send friend request:", error);
    }
  };
  const blockFriend = () => {};
  const unfriend = () => {};
  const acceptFriend = () => {};
  const declineFriend = () => {};

  return {
    isFriend,
    isBlocked,
    isGuest,
    isMyUser,
    sendFriend,
    blockFriend,
    unfriend,
    acceptFriend,
    declineFriend,
  };
};

export default useFriend;
