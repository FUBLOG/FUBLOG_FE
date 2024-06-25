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

export default useSidebarBadge;
