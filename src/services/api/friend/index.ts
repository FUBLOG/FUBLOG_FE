import { friendEndpoint } from "@/services/endpoint";
import { getRequest, postRequest } from "@/services/request";

export const getAllRequestFriend = async () => {
  return await getRequest(friendEndpoint.GET_REQUESTS, {
    security: true,
  });
};
export const acceptFriendRequest = async (data: any) => {
  return await postRequest(friendEndpoint.ACCEPT_FRIEND, {
    security: true,
    data: data,
  });
};
export const rejectFriendRequest = async (data: any) => {
  return await postRequest(friendEndpoint.DECLINE_FRIEND, {
    security: true,
    data: data,
  });
};
export const getFriendList = async () => {
  return await getRequest(friendEndpoint.FRIEND_LIST, {
    security: true,
  });
};
