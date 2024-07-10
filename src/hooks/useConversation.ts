import { useAuthContext } from "@/contexts/AuthContext";
import { getConversationApi } from "@/services/api/chat";
import { userEndpoint } from "@/services/endpoint";
import { getRequest } from "@/services/request";
import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { useEffect, useState } from "react";
import { create } from "zustand";

interface ConversationProps {
  selectedConversation: any;
  setSelectedConversation: (selectedConversation: any) => void;
  messages: any[];
  setMessages: (messages: any) => void;
  conversations: any[];
  setConversations: (conversations: any) => void;
}
const useConversation = create<ConversationProps>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  conversations: [],
  setConversations: (conversations) => set({ conversations }),
}));

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const { conversations, setConversations } = useConversation();
  const { userInfo } = useAuthContext();
  useEffect(() => {
    const getConsversations = async () => {
      await getConversationApi()
        .then((res: any) => {
          setConversations(res?.metadata);
        })
        .catch((error) => {
          console.error("Get conversation failed:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (webStorageClient.get(constants.IS_AUTH)) {
      getConsversations();
    }
  }, [userInfo, setConversations]);
  return { loading, conversations };
};

export { useGetConversation };
export default useConversation;
