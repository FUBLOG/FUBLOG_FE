import { useSocketContext } from "@/contexts/SocketContext";
import useConversation from "./useConversation";
import { useEffect } from "react";

const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage: any) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages, setMessages]);
};
export { useListenMessage };
