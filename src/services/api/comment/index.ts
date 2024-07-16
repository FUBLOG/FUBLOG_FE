import { commentEndpoint } from "@/services/endpoint";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/services/request";

export const getCommentPost = async (postId: any) => {
  return await getRequest(`${commentEndpoint.GET_POST_COMMENTS}`, {
    params: {
      comment_postId: postId,
    },
    security: true,
  });
};

export const addComment = async (
  postId: any,
  content: string,
  parent: string | null
) => {
  return await postRequest(`${commentEndpoint.POST_COMMENT}`, {
    data: {
      comment_postID: postId,
      comment_content: content,
      parent_CommentID: parent,
    },
    security: true,
  });
};

export const deleteComment = async (commentId: any, postId: any) => {
  return await deleteRequest(`${commentEndpoint.DELETE_COMMENT}`, {
    data: {
      parent_CommentID: commentId,
      comment_postID: postId,
    },
    security: true,
  });
};

export const editCommentApi = async (commentId: string, content: string) => {
  return await putRequest(`${commentEndpoint.EDIT_COMMENT}`, {
    data: {
      parent_CommentID: commentId,
      comment_content: content,
    },
    security: true,
  });
};

export const viewMoreComment = async (postId: any) => {
  return await getRequest(`${commentEndpoint.GET_VIEW_MORE_COMMENT}`, {
    params: {
      parent_CommentID: postId,
    },
    security: true,
  });
};
