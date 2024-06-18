import { useEffect, useState } from "react";
import { useUser } from "./useUser";
import { useProfile } from "./useProfile";
import { useProfileContext } from "@/contexts/ProfileContext";
import { deleteRequest, getRequest, postRequest } from "@/services/request";
import { friendEndpoint } from "@/services/endpoint";

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

  const sendFriend = async () => {
    const getSendFriend = async () => {
      await postRequest(friendEndpoint.GET_REQUESTS_SENT, {
        security: true,
        data: {
          targetID: profileInfo?.user?._id,
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
  // const getALLBlocks = async () => {
  //   try {
  //     await getRequest(addFriendEndpoint.ALL_BLOCKS, {
  //       security: true,
  //       data: {
  //         targetID: profileInfo?.user?._id,
  //       },
  //     })
  //       .then((res: any) => {
  //         console.log(res);
  //       })
  //       .catch((error) => {
  //         console.error("Get conversation failed:", error);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   } catch (error) {
  //     console.error("Failed to  unfriend request:", error);
  //   }
  // };
  const unFriend = async () => {
    try {
      await postRequest(friendEndpoint.REMOVE_FRIEND, {
        security: true,
        data: {
          targetID: profileInfo?.user?._id,
        },
      })
        .then(() => {
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
  const acceptFriend = async () => {
    try {
      await postRequest(friendEndpoint.ACCEPT_FRIEND, {
        security: true,
        data: {
          targetID: profileInfo?.user?._id,
        },
      })
        .then(() => {
          setIsFriend(true);
          setLoading(false);
          return;
        })
        .catch((error) => {
          if (error?.code === "404") {
            console.log("404");
          }
          setIsFriend(false);
          console.error("Get conversation failed:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error("Failed to  unfriend request:", error);
    }
  };
  const declineFriend = async () => {
    try {
      await postRequest(friendEndpoint.DECLINE_FRIEND, {
        security: true,
        data: {
          targetID: profileInfo?.user?._id,
        },
      })
        .then(() => {
          SetIsRequester(false);
          setIsFriend(false);
          setLoading(false);
          return;
        })
        .catch((error) => {
          if (error?.code === "404") {
            console.log("404");
          }
          setIsFriend(true);
          console.error("Get conversation failed:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error("Failed to  unfriend request:", error);
    }
  };

  const isRequest = async () => {
    console.log("sourceID: " + userInfo?.userId);

    try {
      await getRequest(
        friendEndpoint.GET_REQUESTS_SENT + profileInfo?.user?._id,
        {
          security: true,
        }
      )
        .then((res: any) => {
          console.log(res);
          if (res === null) {
            setIsFriend(false);
            SetIsRequester(false);
          }
          if (res?.metadata?.sourceID == userInfo?.userId) {
            SetIsSendFriend(true);
            SetIsRequester(false);
          } else if (res?.metadata?.sourceID == profileInfo?.user?._id)
            SetIsRequester(true);
          return true;
        })
        .catch(() => {
          SetIsRequester(false);
          return false;
        })

        .finally(() => {});
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      isRequest();
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
  }, [userInfo, profileInfo, profileHash, getUserInfo, isFriend, isRequester]);

  return {
    isRequest,
    isRequester,
    isFriend,
    isBlocked,
    isGuest,
    isMyUser,
    sendFriend,
    isSendFriend,
    unFriend,
    loading,
    acceptFriend,
    declineFriend,
  };
};

export default useFriend;
