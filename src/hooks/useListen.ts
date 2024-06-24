import { useSocketContext } from "@/contexts/SocketContext";
import useConversation from "./useConversation";
import { useEffect, useState } from "react";
import useSidebarBadge from "./useSidebarBadge";
const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage: any) => {
      const sound = new Audio(require("../assets/sounds/notification.mp3"));
      sound.play();
      setMessages([...messages, newMessage]);
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
      const sound = new Audio(require("../assets/sounds/notification.mp3"));
      sound.play();
      setMessageCount(messageCount + 1);
      if (conversations.length === 0) {
        setConversations([newConversation]);
      } else {
        const updatedConversations = conversations.filter(
          (conversation) => conversation._id !== newConversation._id
        );
        setConversations([newConversation, ...updatedConversations]);
      }
    });
    return () => {
      socket?.off("newConversation");
    };
  }, [socket, conversations]);
};

export { useListenMessage, useListenTyping, useListenConversation };
