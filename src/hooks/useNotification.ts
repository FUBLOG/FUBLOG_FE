import { metadata } from "./../app/layout";
import { useAuthContext } from "@/contexts/AuthContext";
import { friendEndpoint } from "@/services/endpoint";
import { getRequest } from "@/services/request";
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
    const getFriendRequest = async () => {
      setLoading(true);
      const res: any = getRequest(friendEndpoint.GET_REQUESTS, {
        security: true,
      });
      console.log(res);
      setFriendRequest(res.metadata);
      setLoading(false);
    };
    if (userInfo.userId !== null) {
      getFriendRequest();
    }
  }, [userInfo.userId, setFriendRequest]);

  return { friendRequest, loading };
};

export default useNotification;
export { useGetFriendRequest };
