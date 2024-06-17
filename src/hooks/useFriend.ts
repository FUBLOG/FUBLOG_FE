import { useEffect, useState } from "react";
import { useUser } from "./useUser";
import { useProfile } from "./useProfile";
import { useProfileContext } from "@/contexts/ProfileContext";
import { deleteRequest, getRequest, postRequest } from "@/services/request";
import { addFriendEndpoint } from "@/services/endpoint";
import { constants } from "@/settings";
import { putRequest } from "@/services/request/putRequest";

const useFriend = () => {
  const { profileInfo } = useProfileContext();
  const { getUserInfo, profileHash } = useProfile();
  const { userInfo } = useUser();

  const [isFriend, setIsFriend] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isMyUser, setIsMyUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSendFriend, SetIsSendFriend] = useState(false);
  const [isRequester, SetIsRequester] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(userInfo);

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
  }, [userInfo, profileInfo, profileHash, getUserInfo, isFriend, isRequester]);

  const sendFriend = async (targetID: string) => {
    const getSendFriend = async () => {
      await postRequest(addFriendEndpoint.SEND_FRIEND, {
        security: true,
        data: {
          targetID: targetID,
        },
      })
        .then((res: any) => {
          SetIsSendFriend(true);
        })
        .catch((error) => {
          console.error("Get conversation failed:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    if (userInfo?.userId !== "") {
      getSendFriend();
    }
  };
  // const block = async (targetID: string) => {
  //   try {
  //     const response = await blockFriend(userInfo?.userId, targetID);
  //     console.log("Friend request block:", response);
  //   } catch (error) {
  //     console.error("Failed to send friend request:", error);
  //   }
  // };
  const unFriend = async (targetID: string) => {
    try {
      await postRequest(addFriendEndpoint.UNFRIEND, {
        security: true,
        data: {
          targetID: targetID,
        },
      })
        .then((res: any) => {
          setIsFriend(false);
        })
        .catch((error) => {
          console.error("Get conversation failed:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error("Failed to  unfriend request:", error);
    }
  };

  const isRequest = async (targetID: string) => {
    try {
      await getRequest(addFriendEndpoint.IS_REQUEST + targetID, {
        security: true,
      })
        .then((res: any) => {
          SetIsRequester(true);
          return true;
        })
        .catch((error) => {
          SetIsRequester(false);
          console.error("Get conversation failed:", error);

          return false;
        })

        .finally(() => {});
    } catch (error) {
      return false;

      console.error("Failed to  unfriend request:", error);
    }
  };
  const declineFriend = async (targetID: string) => {
    try {
      const response = await deleteRequest(addFriendEndpoint.DECLINE_FRIEND, {
        security: true,
        data: {
          targetID: targetID,
        },
      })
        .then((res: any) => {
          console.log("Friend request unfriend:", response);
          setIsFriend(false);
        })
        .catch((error) => {
          console.error("Get conversation failed:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error("Failed to  unfriend request:", error);
    }
  };
  useEffect(() => {
    const fetchIsRequester = async () => {
      const result = await isRequest(profileInfo?.user?._id);
      if (result !== undefined) {
        SetIsRequester(result);
      }
    };

    fetchIsRequester();
  }, [profileInfo?.user?._id, isRequest, SetIsRequester]);
  return {
    isRequest,
    isRequester,
    isFriend,
    isBlocked,
    isGuest,
    isMyUser,
    sendFriend,
    isSendFriend,
    // blockFriend,
    unFriend,
    loading,
    // acceptFriend,
    declineFriend,
  };
};

export default useFriend;
