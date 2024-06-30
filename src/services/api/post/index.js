import { postEndpoint } from "@/services/endpoint";
import { getRequest, postRequest } from "@/services/request";

export const getPostForGuest = async () => {
  return await getRequest(postEndpoint.GET_POSTS_FOR_GUEST);
};

export const getPostForUser = async () => {
  return await getRequest(postEndpoint.GET_POSTS_FOR_USER, {
    security: true,
  });
};


export const getPostById = async (id) => {
  return await getRequest(postEndpoint.GET_POST_BY_ID + id);
};
