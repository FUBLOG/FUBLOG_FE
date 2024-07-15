import { postEndpoint, tagEndpoint } from "@/services/endpoint";
import { getRequest, postRequest } from "@/services/request";

export const getPostForGuest = async (activeTag) => {
  if (activeTag !== null) {
    return await getRequest(
      `${postEndpoint.GET_POSTS_FOR_GUEST}?tagId=${activeTag}`
    );
  }
  return await getRequest(postEndpoint.GET_POSTS_FOR_GUEST);
};

export const getPostForUser = async (activeTag) => {
  if (activeTag !== null) {
    return await getRequest(
      `${postEndpoint.GET_POSTS_FOR_USER}?tagId=${activeTag}`,
      {
        security: true,
      }
    );
  }
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

export const searchPostByTagForGuest = async (tagId) => {
  return await getRequest(`${tagEndpoint.SEARCH_BY_TAG_FOR_GUEST}${tagId}`);
};

export const searchPostByTagForUser = async (tagId) => {
  return await getRequest(`${tagEndpoint.SEARCH_BY_TAG_FOR_USER}${tagId}`, {
    security: true,
  });
};
