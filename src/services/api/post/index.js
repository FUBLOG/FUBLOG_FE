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

export const getAllTags = async () => {
  return await getRequest(postEndpoint.GET_ALL_TAGS);
};

export const createPost = async (data) => {
  return await postRequest(
    postEndpoint.POST_POST,
    {
      data,
      security: true,
    },
    true
  );
};
