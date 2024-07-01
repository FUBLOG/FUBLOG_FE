import { useGetNotification } from "@/hooks/useNotification";
import { useAuthContext } from "@/contexts/AuthContext";
import { getConversationApi } from "@/services/api/chat";
import { getAllRequestFriend } from "@/services/api/friend";
import { useEffect } from "react";
import { create } from "zustand";
import { getAllNotifications } from "@/services/api/notification";

interface SidebarBadge {
  notificationCount: number;
  setNotificationCount: (count: number) => void;
  friendRequestCount: number;
  setFriendRequestCount: (count: number) => void;
  messageCount: number;
  setMessageCount: (count: number) => void;
}

const useSidebarBadge = create<SidebarBadge>((set) => ({
  notificationCount: 0,
  setNotificationCount: (count) => set({ notificationCount: count }),
  friendRequestCount: 0,
  setFriendRequestCount: (count) => set({ friendRequestCount: count }),
  messageCount: 0,
  setMessageCount: (count) => set({ messageCount: count }),
}));

const useGetMessageNotification = () => {
  const { setMessageCount } = useSidebarBadge();
  const { userInfo, loading } = useAuthContext();
  useEffect(() => {
    const getMessageNotification = async () => {
      // Call API to get message notification
      await getConversationApi().then((res: any) => {
        const count = res?.metadata?.reduce(
          (acc: number, conversation: any) => {
            if (conversation?.lastMessage?.senderId !== userInfo?._id) {
              return acc + conversation?.unReadCount;
            }
            return acc;
          },
          0
        );
        setMessageCount(count);
      });
    };
    if (userInfo?._id !== "") {
      getMessageNotification();
    }
  }, [userInfo?._id]);
};

const useGetFriendRequestNotification = () => {
  const { setFriendRequestCount } = useSidebarBadge();
  const { userInfo } = useAuthContext();
  useEffect(() => {
    const getFriendRequestNotification = async () => {
      // Call API to get friend request notification
      // const res = await getFriendRequestNotificationApi();
      // setFriendRequestCount(res?.metadata?.length || 0);
      const res = await getAllRequestFriend();
      setFriendRequestCount(res?.metadata?.length || 0);
    };
    if (userInfo?._id !== "") {
      getFriendRequestNotification();
    }
  }, [userInfo?._id]);
};

const useGetNotificationCount = () => {
  const { setNotificationCount } = useSidebarBadge();
  const { userInfo } = useAuthContext();
  useEffect(() => {
    const getNotification = async () => {
      // Call API to get notification
      // const res = await getNotificationApi();
      // setNotificationCount(res?.metadata?.length || 0);
      const res = await getAllNotifications();
      const count = res?.metadata?.reduce((acc: number, item: any) => {
        if (!item?.isRead) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setNotificationCount(count);
    };
    if (userInfo?._id !== "") {
      getNotification();
    }
  }, [userInfo?._id]);
};
export {
  useGetMessageNotification,
  useGetFriendRequestNotification,
  useGetNotificationCount,
};
export default useSidebarBadge;
