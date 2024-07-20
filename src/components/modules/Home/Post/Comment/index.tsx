import { Fragment, useEffect, useRef, useState } from "react";
import * as S from "../styles";
import { useAuthContext } from "@/contexts/AuthContext";
import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Carousel, message } from "antd";
import Button from "@/components/core/common/Button";

import {
  addComment,
  deleteComment,
  editCommentApi,
  getCommentPost,
  viewMoreComment,
} from "@/services/api/comment";
import Typography from "@/components/core/common/Typography";
import { getPostByPostId } from "@/services/api/post";
import { useSearchParams } from "next/navigation";
import useThemeStore from "@/hooks/useTheme";

interface ClickViewMore {
  id: string;
  view: boolean;
}
const CommentModal = ({ close, open }: any) => {
  const commentsWrapperRef = useRef<HTMLDivElement | null>(null);
  const editInputRef = useRef<HTMLTextAreaElement | null>(null);

  const [commentsData, setCommentsData] = useState<any>([]);
  const { userInfo } = useAuthContext();
  const [newComment, setNewComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [editMode, setEditMode] = useState<any | null>(null);
  const [selectedCommentId, setSelectedCommentId] = useState<any | null>(null);
  const [parentCommentId, setParentCommentId] = useState<any | null>(null);
  const [childCommentId, setChildCommentId] = useState<any | null>(null);
  const [lastCommentChildId, setLastCommentChildId] = useState<any | null>(
    null
  );

  const [showReportModal, setShowReportModal] = useState(false);
  const [isPostReport, setIsPostReport] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [post, setNewFeed] = useState<any>([]);
  const searchParams = useSearchParams();
  const postId = searchParams.get("ptId");
  const paramComment = searchParams.get("ctId");
  const [comments, setComments] = useState(0);
  const [clickViewMore, setClickViewMore] = useState<ClickViewMore[]>([]);
  const darkMode = useThemeStore((state) => state.darkMode);
  const [ensure, setEnsure] = useState(false);
  const [deleteCommentId, setDeleteCommentId] = useState<any | null>(null);
  const [sign, setSign] = useState(false);
  const handleEndsure = (comment_id: any) => {
    setDeleteCommentId(comment_id);
    setEnsure(true);
  };

  useEffect(() => {
    if (sign) {
      // asyncGetComments();
      setSign(false);
    }
  }, [sign]);

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
    handleInput();
    if (
      editMode === null &&
      editComment === "" &&
      replyComment === "" &&
      newComment === ""
    ) {
      const commentElement = document.getElementById(`${paramComment}`);
      if (commentElement) {
        commentElement.style.color = "blue";
      }
    }
  }, [editMode, editComment, replyComment, newComment]);
  useEffect(() => {
    if (postId !== null) {
      getPostByPostId(postId)
        .then((res) => {
          setNewFeed(res?.metadata);
          setComments(res?.commentCount);
        })
        .catch((error) => {});
    }
  }, []);
  const icrComment = (number: number) => {
    setComments(comments + number);
  };
  const handleInput = () => {
    if (paramComment !== null) {
      const commentElement = document.getElementById(`${paramComment}`);
      if (commentElement) {
        commentElement.style.color = "#352f44";
      }
    }
  };
  const setClick = (commentsData: any) => {
    const newClickViewMore = commentsData?.map((m: any) => ({
      id: m._id,
      view: false,
    }));
    setClickViewMore(newClickViewMore);
  };

  const asyncGetComments = async () => {
    setLoading(true);

    await getCommentPost(postId).then((res: any) => {
      setCommentsData(res?.metadata);
      setClick(res?.metadata);
      setLoading(false);
      setTimeout(() => {
        if (paramComment !== null) {
          const commentElement = document.getElementById(`${paramComment}`);
          if (commentElement) {
            commentElement?.scrollIntoView();
            commentElement.style.color = "blue";
          }
        } else {
          const commentElement = document.getElementById(
            `${res?.metadata?.at(0)?._id}`
          );
          commentElement?.scrollIntoView();
        }
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
                  onClick: () => handleEndsure(comment?._id),
                },
                {
                  key: "reply",
                  label: "Phản hồi",
                  onClick: () => handleReplyComment(comment?._id),
                },
              ]
            : [
                {
                  key: "reply",
                  label: "Phản hồi",
                  onClick: () => handleReplyComment(comment?._id),
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
      setTimeout(() => {
        const commentElement = document.getElementById(`${editMode}`);
        commentElement?.scrollIntoView();
      }, 100);
    }
    setSign(true);
  };

  const handleReplyComment = (commentId: any) => {
    setEditMode("");
    const isParentComment = commentsData.find(
      (comment: any) => comment._id === commentId
    );

    if (isParentComment) {
      const condition = userInfo._id === isParentComment?.comment_userId._id;

      const replyContent = !condition
        ? `@${isParentComment?.comment_userId?.displayName} `
        : ``;
      setReplyComment(replyContent);
      setSelectedCommentId(commentId);
      setParentCommentId(commentId);
      setLastCommentChildId(commentId);
      setChildCommentId(null);

      setTimeout(() => {
        if (editInputRef.current) {
          editInputRef.current.focus();
          const len = replyContent.length;
          editInputRef.current.setSelectionRange(len, len);
        }
      }, 100);
    } else {
      const findComment = (comments: any[], commentId: any): any => {
        for (const comment of comments) {
          if (comment._id === commentId) {
            return comment;
          }
          if (comment.replies) {
            const found = findComment(comment.replies, commentId);
            if (found) {
              return found;
            }
          }
        }
        return null;
      };

      const parent = commentsData?.find((parentComment: any) =>
        parentComment.replies?.some((child: any) => child._id === commentId)
      );
      setLastCommentChildId(parent?.replies[parent?.replies?.length - 1]?._id);
      if (parent) {
        const child = findComment(parent.replies, commentId);

        const condition = userInfo._id === child?.comment_userId?._id;
        const replyContent = !condition
          ? `@${child?.comment_userId?.displayName} `
          : ``;
        setReplyComment(replyContent);
        setSelectedCommentId(commentId);

        setParentCommentId(parent?._id);
        setChildCommentId(child?._id);

        setTimeout(() => {
          if (editInputRef.current) {
            editInputRef.current.focus();
            const len = replyContent.length;
            editInputRef.current.setSelectionRange(len, len);
          }
        }, 100);
      }
    }
  };

  const handleEditComment = (commentId: number) => {
    setSelectedCommentId("");
    const isParentComment = commentsData.find(
      (comment: any) => comment._id === commentId
    );
    if (isParentComment) {
      setEditMode(commentId);
      setEditComment(isParentComment?.comment_content);
    } else {
      const parent = commentsData?.find((parentComment: any) =>
        parentComment.replies?.find((child: any) => child._id === commentId)
      );
      const child = parent?.replies?.find(
        (child: any) => child._id === commentId
      );
      setEditMode(commentId);
      setEditComment(child?.comment_content);
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    await deleteComment(commentId, post?._id);
    const updatedComments = commentsData.filter(
      (comment: any) => comment._id !== commentId
    );
    setCommentsData(updatedComments);
    icrComment(-1);
    setEnsure(false);
    setSign(true);
  };
  const handleReply = async () => {
    if (replyComment.trim() && selectedCommentId !== null) {
      const replyData = await addComment(
        post?._id,
        replyComment,
        parentCommentId
      );

      const updatedComments = commentsData.map((comment: any) => {
        if (comment._id === parentCommentId) {
          return {
            ...comment,
            replies: [
              ...(comment.replies || []),
              {
                ...replyData?.metadata,
                comment_userId: userInfo,
              },
            ],
          };
        } else if (comment._id === selectedCommentId) {
          return {
            ...comment,
            replies: [
              ...(comment.replies || []).map((reply: any) => {
                if (reply._id === childCommentId) {
                  return {
                    ...reply,
                    replies: [
                      ...(reply.replies || []),
                      {
                        ...replyData?.metadata,
                        comment_userId: userInfo,
                      },
                    ],
                  };
                }
                return reply;
              }),
            ],
          };
        }
        return comment;
      });

      setCommentsData(updatedComments);
      icrComment(1);
      setReplyComment("");
      setSelectedCommentId(null);
      setParentCommentId(null);
      setChildCommentId(null);
      setLastCommentChildId(null);
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
      const isChild = comment?.comment_right - comment?.comment_left === 2;

      return (
        <Fragment key={comment?._id}>
          <S.Comment
            id={comment?._id}
            style={{
              marginLeft: `${depth * 40}px`,
              border: editMode === comment?._id ? "1px solid #5c5470" : "none",
              padding: "10px",
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
                    $color={darkMode ? "#fff" : "#352f44"}
                    $hoverColor={darkMode ? "#000" : "#fff"}
                    $borderColor={darkMode ? "#fff" : "#352f44"}
                    $hoverBackgroundColor={darkMode ? "#F7D600" : "#000"}
                    $backgroundColor={darkMode ? "#000 " : "transparent"}
                    style={{
                      width: "100px",
                      marginTop: "0px",
                      padding: "5px 5px",
                      marginRight: "50px",
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

            {lastCommentChildId === comment._id && (
              <S.ReplyBox
                style={{
                  marginTop: isChild ? "10px" : "0px",
                  marginBottom: "10px",
                }}
              >
                <S.TextArea
                  value={replyComment}
                  onChange={(e) => setReplyComment(e.target.value)}
                  placeholder="Viết phản hồi..."
                  ref={editInputRef}
                />
                <S.ButtonWrapper>
                  <Button
                    $color={darkMode ? "#fff" : "#352f44"}
                    $hoverColor={darkMode ? "#000" : "#fff"}
                    $borderColor={darkMode ? "#fff" : "#352f44"}
                    $hoverBackgroundColor={darkMode ? "#F7D600" : "#000"}
                    $backgroundColor={darkMode ? "#000 " : "transparent"}
                    style={{
                      width: "100px",
                      marginTop: "0px",
                      padding: "5px 5px",
                      marginRight: "50px",
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
    <>
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
              $color={darkMode ? "#fff" : "#352f44"}
              $hoverColor={darkMode ? "#000" : "#fff"}
              $borderColor={darkMode ? "#fff" : "#352f44"}
              $hoverBackgroundColor={darkMode ? "#F7D600" : "#000"}
              $backgroundColor={darkMode ? "#000 " : "transparent"}
              style={{
                width: "100px",
                marginTop: "0px",
                padding: "5px 5px",
                marginRight: "50px",
              }}
              onClick={handleAddComment}
            >
              Đăng
            </Button>
          </S.ButtonWrapper>
        </S.CommentBox>
      </S.CustomModal>
      <S.CustomModal2
        title={"Bạn Có Muốn Xóa Bình Luận ?"}
        open={ensure}
        onCancel={() => setEnsure(false)}
        cancelText={"Hủy"}
        okText={"Tiếp tục"}
        onOk={() => handleDeleteComment(deleteCommentId)}
      >
        Bình luận này sẽ xóa vĩnh viễn{" "}
      </S.CustomModal2>
    </>
  );
};

export default CommentModal;
