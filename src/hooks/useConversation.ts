import { useAuthContext } from "@/contexts/AuthContext";
import { userEndpoint } from "@/services/endpoint";
import { getRequest } from "@/services/request";
import { useEffect, useState } from "react";
import { create } from "zustand";

interface ConversationProps {
  selectedConversation: any;
  setSelectedConversation: (selectedConversation: any) => void;
  messages: any[];
  setMessages: (messages: any) => void;
}
const useConversation = create<ConversationProps>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const { userInfo } = useAuthContext();
  useEffect(() => {
    const getConsversations = async () => {
      setLoading(true);
      getRequest(userEndpoint.USER_MESSAGES, { security: true })
        .then((res: any) => {
          setConversation(res?.metadata);
        })
        .catch((error) => {
          console.error("Get conversation failed:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (userInfo?.userId !== "") {
      getConsversations();
    }
  }, [userInfo]);
  return { loading, conversation };
};

export { useGetConversation };
export default useConversation;
