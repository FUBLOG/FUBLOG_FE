import { messageEndpoint, userEndpoint } from "@/services/endpoint";
import { getRequest, postRequest } from "@/services/request";

export const sendMessageApi = async (id: string, data: any) => {
  return await postRequest(messageEndpoint.SEND_MESSAGE + id, {
    security: true,
    data,
  });
};

export const getMessageApi = async (id: string) => {
  return await getRequest(messageEndpoint.GET_MESSAGE + id, {
    security: true,
  });
};

export const getConversationApi = async () => {
  return await getRequest(userEndpoint.USER_MESSAGES, { security: true });
};
export const getConversation = async (id: string) => {
  return await getRequest(userEndpoint.GET_CONVERSATION + id, {
    security: true,
  });
};
