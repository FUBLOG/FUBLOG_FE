import { useSocketContext } from "@/contexts/SocketContext";
import useConversation from "./useConversation";
import { useEffect } from "react";
import notificationSound from "../assets/sounds/notification.mp3";
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

export { useListenMessage };
