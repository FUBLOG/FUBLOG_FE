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


export const getPostById = async (userId) => {
  return await getRequest(postEndpoint.GET_POST_BY_USERID + userId);
};

export const getPostByPostId = async (postId) => {
  return await getRequest(postEndpoint.GET_POST_BY_POSTID + postId);
};