import { useSocketContext } from "@/contexts/SocketContext";
import useConversation from "./useConversation";
import { useEffect, useState } from "react";
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

export { useListenMessage, useListenTyping };
