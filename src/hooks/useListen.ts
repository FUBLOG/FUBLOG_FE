import { useSocketContext } from "@/contexts/SocketContext";
import useConversation from "./useConversation";
import { useEffect, useState } from "react";
import useSidebarBadge from "./useSidebarBadge";
const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage: any) => {
      const sound = new Audio(require("../assets/sounds/livechat-129007.mp3"));
      sound.play();
      if (newMessage?.senderId === selectedConversation?.participants[0]?._id) {
        if (selectedConversation) {
          selectedConversation.unReadCount =
            selectedConversation.unReadCount + 1;
        }
        setMessages([...messages, newMessage]);
      }
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages, setMessages]);
};
const useListenTyping = () => {
  const { socket } = useSocketContext();
  const [typing, setTyping] = useState<Boolean>(false);
  useEffect(() => {
    socket?.on("typing", (data: any) => {
      setTyping(data);
    });
    return () => {
      socket?.off("typing");
    };
  }, [socket, setTyping]);
  return { typing };
};

const useListenConversation = () => {
  const { socket } = useSocketContext();
  const { conversations, setConversations } = useConversation();
  const { setMessageCount, messageCount } = useSidebarBadge();
  useEffect(() => {
    socket?.on("newConversation", (newConversation: any) => {
      const sound = new Audio(require("../assets/sounds/livechat-129007.mp3"));
      sound.play();
      if (conversations.length === 0) {
        setConversations([newConversation]);
      } else {
        const updatedConversations = conversations.filter(
          (conversation) => conversation._id !== newConversation._id
        );
        setConversations([newConversation, ...updatedConversations]);
      }
      setMessageCount(messageCount + 1);
    });
    return () => {
      socket?.off("newConversation");
    };
  }, [socket, conversations, messageCount]);
};

const useListenNotification = () => {
  const { socket } = useSocketContext();
  const { notificationCount, setNotificationCount } = useSidebarBadge();
  useEffect(() => {
    socket?.on("newNotification", (newConversation: any) => {
      const sound = new Audio(
        require("../assets/sounds/new-notification-7-210334.mp3")
      );
      sound.play();
      setNotificationCount(notificationCount + 1);
    });
    return () => {
      socket?.off("newNotification");
    };
  }, [socket, notificationCount, setNotificationCount]);
};

const useListenFriendRequest = () => {
  const { socket } = useSocketContext();
  const { friendRequestCount, setFriendRequestCount } = useSidebarBadge();
  useEffect(() => {
    socket?.on("friendRequest", (friendRequest: any) => {
      const sound = new Audio(
        require("../assets/sounds/new-notification-7-210334.mp3")
      );
      sound.play();
      setFriendRequestCount(friendRequestCount + 1);
    });
    return () => {
      socket?.off("friendRequest");
    };
  }, [socket, friendRequestCount, setFriendRequestCount]);
};

export {
  useListenMessage,
  useListenTyping,
  useListenConversation,
  useListenNotification,
  useListenFriendRequest,
};
