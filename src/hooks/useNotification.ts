import { useAuthContext } from "@/contexts/AuthContext";
import { getAllRequestFriend } from "@/services/api/friend";
import { getAllNotifications } from "@/services/api/notification";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { markNotificationAsRead } from "@/services/api/notification";
import { markAllNotificationsAsRead } from "@/services/api/notification";
interface Notification {
  id: number;
  title: string;
  message: string;
  seen: boolean;
  avatar: string;
  createdAt: Date;
  link: string;
}
 
interface NotificationProps {
  notifications: any;
  setNotifications: (notifications: any) => void;
  friendRequest: any;
  setFriendRequest: (friendRequest: any) => void;
}

const useNotification = create<NotificationProps>((set) => ({
  notifications: [],
  setNotifications: (notifications) => set({ notifications }),
  friendRequest: [],
  setFriendRequest: (friendRequest) => set({ friendRequest }),
}));

const useGetFriendRequest = () => {
  const [loading, setLoading] = useState(false);
  const { friendRequest, setFriendRequest } = useNotification();
  const { userInfo } = useAuthContext();
  useEffect(() => {
    const getFriendRequest = async () => {
      setLoading(true);
      const res: any = await getAllRequestFriend();
      if (res?.metadata) {
        const data = res.metadata.map((item: any) => {
          return {
            ...item,
            title: `${
              item?.sourceID?.displayName || "Ai Đó"
            } Đã gửi lời mời kết bạn cho bạn`,
          };
        });
        setFriendRequest(data);
        setLoading(false);
      }
    };
    if (userInfo.userId !== null) {
      getFriendRequest();
    }
  }, []);

  return { friendRequest, loading };
};

const useGetNotification = () => {
  const [loading, setLoading] = useState(false);
  const { notifications, setNotifications } = useNotification();
  useEffect(() => {
    const getNotificaton = async () => {
      setLoading(true);
      const res: any = await getAllNotifications();
      if (res?.metadata) {
        const data = res.metadata.map((item: any) => {
          return {
            ...item,
            title: item?.message,
          };
        });
        setNotifications(data);
        setLoading(false);
      }
    };
    getNotificaton();
  }, []);

  return { notifications, loading };
};
const useMarkNotificationAsRead = () => {
  const { notifications, setNotifications } = useNotification();

  const markAsRead = async (notificationId: number) => {
    try {
      await markNotificationAsRead(notificationId);
      setNotifications((prevNotifications: any) =>
        prevNotifications.map((notification: any) =>
          notification.id === notificationId
            ? { ...notification, seen: true }
            : notification
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  return { markAsRead };
};

const useMarkAllNotificationsAsRead = () => {
  const { setNotifications } = useNotification();

  const markAllAsRead = async () => {
    try {
      await markAllNotificationsAsRead();
      setNotifications((prevNotifications: any) =>
        prevNotifications.map((notification: any) => ({
          ...notification,
          seen: true,
        }))
      );
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  return { markAllAsRead };
};

export { useMarkAllNotificationsAsRead };

export { useMarkNotificationAsRead };
export default useNotification;
export { useGetFriendRequest, useGetNotification };
