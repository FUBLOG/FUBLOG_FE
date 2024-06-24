import { useAuthContext } from "@/contexts/AuthContext";
import { getAllRequestFriend } from "@/services/api/friend";
import { getAllNotifications } from "@/services/api/notification";
import { useEffect, useState } from "react";
import { create } from "zustand";

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
    console.log("noti", userInfo?._id);

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
    if (userInfo?._id !== "") {
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

export default useNotification;
export { useGetFriendRequest, useGetNotification };
