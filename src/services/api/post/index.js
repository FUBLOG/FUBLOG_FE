import { postEndpoint } from "@/services/endpoint";
import { deleteRequest, getRequest, patchRequest, postRequest } from "@/services/request";

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
export const updatePost = async (postId, data) => {
  return await patchRequest(
    postEndpoint.UPDATE_POST + "/" + postId, {
    data,
    security: true,
  },
    true);
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
export const addLike = async (postID) => {
  return await postRequest(
    postEndpoint.ADD_LIKE,
    {
      data: postID,
      security: true,
    },
  );
};
export const deletePost = async (postId) => {
  return await deleteRequest(postEndpoint.DELETE_POST + "/" + postId, {
    security: true,
  });
};
export const unLike = async (postID) => {
  return await postRequest(
    postEndpoint.UN_LIKE,
    {
      data: postID,
      security: true,
    },
  );
};
export const PostReportPost = async (data) => {
  return await postRequest(
    postEndpoint.REPORT_POST,
    {
      data,
      security: true,
    },
  );
};