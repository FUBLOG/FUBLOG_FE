import { Fragment, useEffect, useRef, useState } from "react";
import * as S from "../styles";
import { useAuthContext } from "@/contexts/AuthContext";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Modal, Carousel } from "antd";
import {
  addComment,
  deleteComment,
  editCommentApi,
  getCommentPost,
  viewMoreComment,
} from "@/services/api/comment";
import Typography from "@/components/core/common/Typography";
import { getPostByPostId } from "@/services/api/post";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";

interface ClickViewMore {
  id: string;
  view: boolean;
}
const CommentModal = ({
  postId,
  close,
  open,
  icrComment,
  paramComment,
}: any) => {
  const commentsWrapperRef = useRef<HTMLDivElement | null>(null);
  const [commentsData, setCommentsData] = useState<any>([]);
  const { userInfo } = useAuthContext();
  const [newComment, setNewComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [editMode, setEditMode] = useState<any | null>(null);
  const [selectedCommentId, setSelectedCommentId] = useState<any | null>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [isPostReport, setIsPostReport] = useState(false);
  const editInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [post, setNewFeed] = useState<any>([]);
  const [clickViewMore, setClickViewMore] = useState<ClickViewMore[]>([]);
  useEffect(() => {
    if (editInputRef.current && editMode !== null) {
      editInputRef.current.focus();
      editInputRef.current.setSelectionRange(
        editInputRef.current.value.length,
        editInputRef.current.value.length
      );
    }
  }, [editMode]);
  useEffect(() => {
    if (postId !== null) {
      getPostByPostId(postId)
        .then((res) => {
          setNewFeed(res?.metadata);
        })
        .catch((error) => {});
    }
  }, [postId]);
  const setClick = (commentsData: any) => {
    const newClickViewMore = commentsData.map((m: any) => ({
      id: m._id,
      view: false,
    }));
    setClickViewMore(newClickViewMore);
  };
  const asyncGetComments = async () => {
    setLoading(true);

    await getCommentPost(postId).then((res: any) => {
      setCommentsData(res?.metadata);
      setLoading(false);
      setClick(res?.metadata);

      setTimeout(() => {
        const commentElement = document.getElementById(
          `${res?.metadata?.at(0)?._id}`
        );
        commentElement?.scrollIntoView();
      }, 100);
    });
  };
  useEffect(() => {
    if (open) {
      asyncGetComments();
    }
    return () => {
      setCommentsData([]);
      setLoading(false);
      setSelectedCommentId(null);
      setEditMode(null);
    };
  }, [open, paramComment]);

  const handleAddComment = async () => {
    const res: any = await addComment(postId, newComment, null);

    const updatedComments = [
      {
        comment_content: newComment,
        comment_userId: userInfo,
        _id: res?.metadata?._id,
      },
      ...commentsData,
    ];

    setCommentsData(updatedComments);
    setNewComment("");
    icrComment(1);

    // Scroll to the latest comment
    setTimeout(() => {
      const commentElement = document.getElementById(`${res?.metadata?._id}`);
      commentElement?.scrollIntoView();
    }, 100);
  };
  const handleReportClick = (commentId: number) => {
    setSelectedCommentId(commentId);
    setIsPostReport(false);
    setShowReportModal(true);
  };

  const renderCommentMenu = (comment: any) => {
    return (
      <Menu
        items={[
          ...(comment?.comment_userId?._id === userInfo?._id
            ? [
                {
                  key: "edit",
                  label: "Chỉnh sửa",
                  onClick: () => handleEditComment(comment?._id),
                },
                {
                  key: "delete",
                  label: "Xóa",
                  onClick: () => handleDeleteComment(comment?._id),
                },
              ]
            : [
                {
                  key: "reply",
                  label: "Phản hồi",
                  onClick: () => handleReplyComment(comment?._id),
                },
                {
                  key: "report",
                  label: "Báo cáo",
                  onClick: () => handleReportClick(comment?._id),
                },
              ]),
        ]}
      />
    );
  };

  const handleUpdateComment = async () => {
    if (editMode !== null) {
      setLoadingUpdate(true);
      await editCommentApi(editMode, editComment);
      const updatedComments = commentsData.map((comment: any) => {
        if (comment._id === editMode) {
          return { ...comment, comment_content: editComment };
        }
        return comment;
      });
      setCommentsData(updatedComments);
      setLoadingUpdate(false);
      setEditComment("");
      setEditMode(null);
    }
  };

  const handleReplyComment = (commentId: any) => {
    const parentComment = commentsData.find(
      (comment: any) => comment._id === commentId
    );
    if (parentComment) {
      const replyContent = `@${parentComment?.comment_userId?.displayName} `;
      setReplyComment(replyContent);
      setSelectedCommentId(commentId);

      setTimeout(() => {
        if (editInputRef.current) {
          editInputRef.current.focus();
          const len = replyContent.length;
          editInputRef.current.setSelectionRange(len, len);
        }
      }, 100);
    }
  };

  const handleEditComment = (commentId: number) => {
    const commentToEdit = commentsData.find(
      (comment: any) => comment._id === commentId
    );
    if (commentToEdit) {
      setEditMode(commentId);
      setEditComment(commentToEdit?.comment_content);
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    await deleteComment(commentId, post?._id);
    const updatedComments = commentsData.filter(
      (comment: any) => comment._id !== commentId
    );
    setCommentsData(updatedComments);
    icrComment(-1);
  };

  const handleReply = async () => {
    if (replyComment.trim() && selectedCommentId !== null) {
      const replyData = await addComment(
        post?._id,
        replyComment,
        selectedCommentId
      );

      const updatedComments = commentsData.map((comment: any) => {
        if (comment?._id === selectedCommentId) {
          return {
            ...comment,
            replies: [
              {
                ...replyData?.metadata,
                comment_userId: userInfo,
              },
              ...(comment?.replies || []),
            ],
          };
        }
        return comment;
      });

      setCommentsData(updatedComments);
      icrComment(1);
      setReplyComment("");
      setSelectedCommentId(null);
    }
  };

  const renderComments = (commentsArray: any, depth = 0) => {
    return commentsArray?.map((comment: any) => {
      const childrenCount =
        (comment?.comment_right - comment?.comment_left - 1) / 2;

      const viewMore = async (_id: any) => {
        const res = await viewMoreComment(_id);
        const updatedComments = commentsArray.map((c: any) => {
          if (c._id === _id) {
            return { ...c, replies: res.metadata, viewMore: false };
          }
          return c;
        });
        const newClickViewMore = clickViewMore.map((m: any) => {
          if (m.id === _id) {
            return {
              ...m,
              view: true,
            };
          }
          return m;
        });
        setClickViewMore(newClickViewMore);
        setCommentsData(updatedComments);
      };

      const viewReply = clickViewMore?.find((m) => m.id === comment?._id);

      return (
        <Fragment key={comment?._id}>
          <S.Comment
            id={comment?._id}
            style={{
              marginLeft: `${depth * 40}px`,
              border: editMode === comment?._id ? "3px solid #5c5470" : "none",
            }}
          >
            <S.CommentHeader>
              <S.Avatar
                src={comment?.comment_userId?.userInfo?.avatar}
                alt={`${comment?.comment_userId?.displayName}'s avatar`}
              />
              <S.CommentUser>
                {comment?.comment_userId?.displayName}
              </S.CommentUser>
              <Dropdown
                overlay={renderCommentMenu(comment)}
                trigger={["click"]}
              >
                <EllipsisOutlined
                  style={{ cursor: "pointer", margin: "10px" }}
                />
              </Dropdown>
            </S.CommentHeader>
            {editMode === comment._id ? (
              <>
                <S.TextArea
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                  autoFocus
                  ref={editInputRef}
                />
                <S.ButtonWrapper>
                  <Button
                    loading={loadingUpdate}
                    color="red"
                    type="primary"
                    style={{
                      width: "80px",
                      marginTop: "0px",
                      padding: "5px 5px",
                      border: "none",
                    }}
                    onClick={handleUpdateComment}
                  >
                    Cập nhật
                  </Button>
                </S.ButtonWrapper>
              </>
            ) : childrenCount > 0 ? (
              <>
                <S.CommentContent>{comment?.comment_content}</S.CommentContent>

                {viewReply?.view === false && childrenCount > 0 && (
                  <S.CommentContent onClick={() => viewMore(comment._id)}>
                    Xem thêm {childrenCount} bình luận
                  </S.CommentContent>
                )}
              </>
            ) : (
              <S.CommentContent>{comment?.comment_content}</S.CommentContent>
            )}
            {webStorageClient.get(constants.IS_AUTH) &&
              !showReportModal &&
              !isPostReport &&
              selectedCommentId === comment._id && (
                <S.ReplyBox>
                  <S.TextArea
                    value={replyComment}
                    onChange={(e) => setReplyComment(e.target.value)}
                    placeholder="Viết phản hồi..."
                    ref={editInputRef}
                  />
                  <S.ButtonWrapper>
                    <Button
                      color="red"
                      type="primary"
                      style={{
                        width: "80px",
                        marginTop: "40px",
                        padding: "5px 5px",
                        border: "none",
                      }}
                      onClick={handleReply}
                    >
                      Phản hồi
                    </Button>
                  </S.ButtonWrapper>
                </S.ReplyBox>
              )}
          </S.Comment>
          {comment.replies && renderComments(comment.replies, depth + 1)}
        </Fragment>
      );
    });
  };

  return (
    <S.CustomModal
      title="Bài viết"
      open={open}
      onOk={close}
      onCancel={close}
      destroyOnClose={true}
      footer={null}
      centered
      width={800}
    >
      <S.PostContentWrapper>
        <S.PostHeaderModal>
          <S.Avatar
            src={post?.UserID?.userInfo?.avatar}
            alt={`${post?.UserID?.displayName}'s avatar`}
          />
          <S.UserName>{post?.UserID?.displayName}</S.UserName>
        </S.PostHeaderModal>
        <Typography
          variant="caption-small"
          color="#352f44"
          fontSize="16px"
          lineHeight="2"
          margin="5px 20px"
        >
          {post?.postContent}
        </Typography>

        {post?.postLinkToImages?.length === 1 && (
          <S.ImagesWrapper>
            <img
              src={post?.postLinkToImages[0]}
              alt="Post Image"
              className="post-image image-modal"
            />
          </S.ImagesWrapper>
        )}
        {post?.postLinkToImages?.length > 1 && (
          <S.ImagesWrapper2>
            <Carousel arrows={true}>
              {post?.postLinkToImages?.map((src: any) => (
                <img
                  key={src}
                  src={src}
                  alt="Post Image"
                  className="post-image image-modal"
                />
              ))}
            </Carousel>
          </S.ImagesWrapper2>
        )}
      </S.PostContentWrapper>
      <S.CommentSection>
        <S.CommentsWrapper ref={commentsWrapperRef}>
          {renderComments(commentsData)}
        </S.CommentsWrapper>
      </S.CommentSection>
      <S.CommentBox>
        <S.CommentHeader>
          <S.Avatar
            src={userInfo?.userInfo?.avatar}
            alt={`${userInfo?.displayName}'s avatar`}
          />
          <S.CommentUser>{userInfo?.displayName}</S.CommentUser>
        </S.CommentHeader>
        <S.TextArea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Viết bình luận..."
          ref={editInputRef}
          className="comment-textarea"
        />
        <S.ButtonWrapper>
          <Button
            color="red"
            type="primary"
            style={{
              width: "100px",
              marginTop: "0px",
              padding: "5px 5px",
              border: "none",
              marginRight: "50px",
            }}
            onClick={handleAddComment}
          >
            Đăng
          </Button>
        </S.ButtonWrapper>
      </S.CommentBox>
    </S.CustomModal>
  );
};

export default CommentModal;
