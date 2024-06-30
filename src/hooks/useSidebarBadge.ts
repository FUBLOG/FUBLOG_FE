import { useAuthContext } from "@/contexts/AuthContext";
import { getConversationApi } from "@/services/api/chat";
import { useEffect } from "react";
import { create } from "zustand";

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
  const { userInfo ,loading} = useAuthContext();
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

export { useGetMessageNotification };
export default useSidebarBadge;
