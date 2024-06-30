import { friendEndpoint } from "@/services/endpoint";
import { deleteRequest, getRequest, postRequest } from "@/services/request";

export const getAllRequestFriend = async () => {
  return await getRequest(friendEndpoint.GET_REQUESTS, {
    security: true,
  });
};
export const acceptFriendRequest = async (data: any) => {
  return await postRequest(friendEndpoint.ACCEPT_FRIEND, {
    security: true,
    data: {
      targetID: data,
    },
  });
};
export const rejectFriendRequest = async (data: any) => {
  return await postRequest(friendEndpoint.DECLINE_FRIEND, {
    security: true,
    data: {
      targetID: data?.targetID,
    },
  });
};

export const sendFriendRequest = async (data: any) => {
  return await postRequest(friendEndpoint.ADD_FRIEND, {
    security: true,
    data: {
      targetID: data,
    },
  });
};

export const unfriend = async (data: any) => {
  return await postRequest(friendEndpoint.REMOVE_FRIEND, {
    security: true,
    data: {
      targetID: data,
    },
  });
};

export const getRequestFriend = async (id: string) => {
  return await getRequest(friendEndpoint.GET_REQUESTS_SENT + id, {
    security: true,
  });
};
export const getFriendList = async () => {
  return await getRequest(friendEndpoint.FRIEND_LIST, {
    security: true,
  });
};
export const unsentFriend = async (data: any) => {
  return await deleteRequest(friendEndpoint.UNSENT_REQUEST, {
    security: true,
    data: {
      targetID: data,
    },
  });
};
