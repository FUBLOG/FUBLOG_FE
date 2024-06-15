import { use, useEffect, useState } from "react";
import useConversation from "./useConversation";
import { getRequest, postRequest } from "@/services/request";
import { messageEndpoint } from "@/services/endpoint";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation, setConversations,conversations } =
    useConversation();
  const sendMessage = async (message: string) => {
    setLoading(true);
    try {
      const res: any = await postRequest(
        messageEndpoint.SEND_MESSAGE +
          selectedConversation?.participants[0]?._id,
        {
          security: true,
          data: {
            message,
          },
        }
      );
      setMessages([...messages, res?.metadata]);
      const updatedConversations = [
        selectedConversation,
        ...conversations.filter(
          (conversation: any) => conversation._id !== selectedConversation._id
        ),
      ];
      setConversations(updatedConversations);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const res: any = await getRequest(
          messageEndpoint.GET_MESSAGE +
            selectedConversation?.participants[0]?._id,
          {
            security: true,
          }
        );
        const listMessage = res?.metadata;
        listMessage.sort((a: any, b: any) => {
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        });
        setMessages(listMessage);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessage();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export { useSendMessage, useGetMessage };
