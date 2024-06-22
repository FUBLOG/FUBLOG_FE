import { postEndpoint } from "@/services/endpoint";
import { getRequest } from "@/services/request";

export const getPostForGuest = async () => {
  return await getRequest(postEndpoint.GET_POSTS_FOR_GUEST);
};

export const getPostForUser = async () => {
  return await getRequest(postEndpoint.GET_POSTS_FOR_USER, {
    security: true,
  });
};
