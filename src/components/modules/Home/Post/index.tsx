import React, { useState, useEffect, useRef } from "react";
import { Modal, message, Dropdown, Menu, Radio } from "antd";
import { HeartOutlined, HeartFilled, CommentOutlined, ExclamationCircleOutlined, EllipsisOutlined, TagOutlined } from "@ant-design/icons";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import * as S from "./styles"; 
import webStorageClient from "@/utils/webStorageClient";
import { jwtDecode } from "jwt-decode";

interface Comment {
  id: number;
  user: string;
  avatar: string;
  content: string;
  parentId?: number | null;
  replies?: Comment[];
}

interface PostProps {
  user: string;
  avatar: string;
  content: string;
  images: string[];
  tags: string[];
  initialLikes: number;
  initialComments: number;
  initialCommentsData: Comment[];
  currentUser: string | null;
}

function Post({
  user,
  avatar,
  content,
  images,
  tags,
  initialLikes,
  initialComments,
  initialCommentsData = [],
  currentUser,
}: Readonly<PostProps>) {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState(""); 
  const [replyComment, setReplyComment] = useState(""); 
  const [editComment, setEditComment] = useState("");
  const [commentsData, setCommentsData] = useState(initialCommentsData);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(null);
  const [reportReason, setReportReason] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<number | null>(null);
  const [isPostReport, setIsPostReport] = useState(false);
  const [isGuest, setIsGuest] = useState(true);
  const [currentUserState, setCurrentUser] = useState<string>("Anonymous");

  const commentsWrapperRef = useRef<HTMLDivElement | null>(null);
  const editInputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (editInputRef.current && editMode !== null) {
      editInputRef.current.focus();
      editInputRef.current.setSelectionRange(editInputRef.current.value.length, editInputRef.current.value.length);
    }
  }, [editMode]);

  useEffect(() => {
    if (commentsWrapperRef.current) {
      commentsWrapperRef.current.scrollTop = commentsWrapperRef.current.scrollHeight;
    }
  }, [commentsData]);

  useEffect(() => {
    const token = webStorageClient.getToken();
    if (token) {
      const decodedToken = jwtDecode<{ username: string }>(token); 
      setCurrentUser(decodedToken.username || "Anonymous");
      setIsGuest(false);
    } else {
      setCurrentUser("Anonymous");
      setIsGuest(true);
    }
  }, []);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleReportClick = (commentId: number) => {
    setSelectedCommentId(commentId);
    setIsPostReport(false);
    setShowReportModal(true);
  };

  const handlePostReportClick = () => {
    setIsPostReport(true);
    setShowReportModal(true);
  };

  const handleConfirmReport = () => {
    setShowReportModal(false);
    setShowConfirmModal(true);
  };

  const handleFinalReport = () => {
    setShowConfirmModal(false);
    message.success(isPostReport ? "Báo cáo bài viết thành công" : "Báo cáo bình luận thành công");
    setReportReason(null);
    setSelectedCommentId(null);
  };

  const handleCloseSuccessModal = () => {
    setShowConfirmModal(false);
  };

  const handleCommentClick = () => {
    setShowCommentsModal(true);
  };

  const handleAddComment = () => {
    if (isGuest) {
      message.warning("Vui lòng đăng nhập để bình luận.");
      return;
    }

    if (newComment.trim()) {
      const newCommentData: Comment = {
        id: commentsData.length + 1,
        user: currentUserState ?? "Anonymous",
        avatar: "jos.png",
        content: newComment,
        parentId: null,
        replies: [],
      };

      const updatedComments = [...commentsData, newCommentData];
      setCommentsData(updatedComments);
      setComments(comments + 1);
      setNewComment(""); 
    }
  };

  const handleReply = () => {
    if (isGuest) {
      message.warning("Vui lòng đăng nhập để phản hồi.");
      return;
    }

    if (replyComment.trim() && selectedCommentId !== null) {
      const replyData: Comment = {
        id: commentsData.length + 1,
        user: currentUserState ?? "Anonymous",
        avatar: "jos.png",
        content: replyComment,
        parentId: selectedCommentId,
        replies: [],
      };

      const updatedComments = commentsData.map((comment) => {
        if (comment.id === selectedCommentId) {
          const newReplies = comment.replies ? [...comment.replies, replyData] : [replyData];
          return { ...comment, replies: newReplies };
        }
        return comment;
      });

      setCommentsData(updatedComments);
      setComments(comments + 1);
      setReplyComment(""); 
      setSelectedCommentId(null);
    }
  };

  const handleCloseCommentsModal = () => {
    setShowCommentsModal(false);
    setEditMode(null);
  };

  const handleEditComment = (commentId: number) => {
    const commentToEdit = findComment(commentsData, commentId);
    if (commentToEdit) {
      setEditMode(commentId);
      setEditComment(commentToEdit.content);
      setShowCommentsModal(true);
    }
  };

  const handleUpdateComment = () => {
    if (isGuest) {
      message.warning("Vui lòng đăng nhập để chỉnh sửa bình luận.");
      return;
    }

    const updatedComments = updateNestedComment(commentsData, editMode, editComment);
    setCommentsData(updatedComments);
    setEditMode(null);
    setEditComment("");
  };

  const handleDeleteComment = (commentId: number) => {
    if (isGuest) {
      message.warning("Vui lòng đăng nhập để xóa bình luận.");
      return;
    }

    const updatedComments = deleteNestedComment(commentsData, commentId);
    setCommentsData(updatedComments);
    setComments(comments - 1);
  };

  const handleReplyComment = (commentId: number) => {
    if (isGuest) {
      message.warning("Vui lòng đăng nhập để phản hồi bình luận.");
      return;
    }

    const parentComment = findComment(commentsData, commentId);
    if (parentComment) {
      const replyContent = `@${parentComment.user} `;
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

  const renderCommentMenu = (comment: Comment) => {
    if (isGuest) {
      return (
        <Menu
          items={[
            {
              key: "report",
              label: "Báo cáo",
              onClick: () => handleReportClick(comment.id),
            },
          ]}
        />
      );
    }

    return (
      <Menu
        items={[
          ...(comment.user === currentUserState
            ? [
                {
                  key: "edit",
                  label: "Chỉnh sửa",
                  onClick: () => handleEditComment(comment.id),
                },
                {
                  key: "delete",
                  label: "Xóa",
                  onClick: () => handleDeleteComment(comment.id),
                },
              ]
            : [
                {
                  key: "reply",
                  label: "Phản hồi",
                  onClick: () => handleReplyComment(comment.id),
                },
                {
                  key: "report",
                  label: "Báo cáo",
                  onClick: () => handleReportClick(comment.id),
                },
              ]),
        ]}
      />
    );
  };

  const renderComments = (commentsArray: Comment[], depth = 0) => {
    return commentsArray.map((comment) => (
      <React.Fragment key={comment.id}>
        <S.Comment
          style={{
            marginLeft: `${depth * 40}px`,
            border: selectedCommentId === comment.id ? "1px solid #5c5470" : "none",
            borderLeft: editMode === comment.id ? "3px solid #5c5470" : "none",
          }}
        >
          <S.CommentHeader>
            <S.Avatar src={comment.avatar} alt={`${comment.user}'s avatar`} />
            <S.CommentUser>{comment.user}</S.CommentUser>
            <Dropdown overlay={renderCommentMenu(comment)} trigger={["click"]}>
              <EllipsisOutlined style={{ cursor: "pointer" }} />
            </Dropdown>
          </S.CommentHeader>
          {editMode === comment.id ? (
            <>
              <S.TextArea
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
                autoFocus
                ref={editInputRef}
              />
              <S.ButtonWrapper>
                <Button
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
          ) : (
            <S.CommentContent>{comment.content}</S.CommentContent>
          )}
          {selectedCommentId === comment.id && (
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
      </React.Fragment>
    ));
  };

  return (
    <S.PostWrapper>
      <S.CustomCard>
        <S.PostHeader>
          <S.UserInfo>
            <S.Avatar src={avatar} alt={`${user}'s avatar`} />
            <Typography variant="caption-normal" color="#B9B4C7" fontSize="18px">
              {user}
            </Typography>
          </S.UserInfo>
          <ExclamationCircleOutlined onClick={handlePostReportClick} style={{ color: "#FAF0E6", cursor: "pointer" }} />
        </S.PostHeader>

        <S.ContentWrapper>
          <Typography variant="caption-small" color="#B9B4C7" fontSize="14px" lineHeight="2">
            {content}
          </Typography>
        </S.ContentWrapper>
        {images.length > 0 && (
          <S.ImagesWrapper>
            {images.map((src) => (
              <img key={src} src={src} alt="Post Image" />
            ))}
          </S.ImagesWrapper>
        )}

        <S.PostFooter>
          <S.Actions>
            {liked ? (
              <HeartFilled style={{ color: "white", cursor: "pointer" }} onClick={toggleLike} />
            ) : (
              <HeartOutlined style={{ color: "white", cursor: "pointer" }} onClick={toggleLike} />
            )}
            <span>{likes}</span>
            <CommentOutlined style={{ color: "white", cursor: "pointer" }} onClick={handleCommentClick} />
            <span>{comments}</span>
          </S.Actions>
          <S.TagWrapper>
            {tags.map((tag) => (
              <S.Tag key={tag}>
                <Typography variant="caption-small" color="#B9B4C7" fontSize="14px" lineHeight="2">
                  <TagOutlined style={{ marginRight: "10px" }} />
                  {tag}
                </Typography>
              </S.Tag>
            ))}
          </S.TagWrapper>
        </S.PostFooter>
      </S.CustomCard>

      <S.CustomModal
        title={isPostReport ? "Báo cáo bài viết" : "Báo cáo bình luận"}
        open={showReportModal}
        onOk={handleConfirmReport}
        onCancel={() => setShowReportModal(false)}
        cancelText={"Hủy"}
        okText={"Tiếp tục"}
      >
        <Typography variant="caption-small">Hãy chọn vấn đề:</Typography>
        <Radio.Group
          onChange={(e) => setReportReason(e.target.value)}
          value={reportReason}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {[
            "Nội dung phản cảm",
            "Bạo lực",
            "Quấy rối",
            "Tự tử hoặc tự gây thương tích",
            "Thông tin sai sự thật",
            "Spam",
            "Chất cấm, chất gây nghiện",
            "Bán hàng trái phép",
            "khác"
          ].map((reason) => (
            <Radio value={reason} key={reason}>
              {reason}
            </Radio>
          ))}
        </Radio.Group>
      </S.CustomModal>

      <S.CustomModal
        title="Xác nhận báo cáo"
        open={showConfirmModal}
        onOk={handleFinalReport}
        onCancel={handleCloseSuccessModal}
        cancelText={"Hủy"}
        okText={"Báo cáo"}
      >
        <Typography variant="caption-small">
          {isPostReport ? "Bạn có chắc chắn muốn báo cáo bài viết này không?" : "Bạn có chắc chắn muốn báo cáo bình luận này không?"}
        </Typography>
      </S.CustomModal>

      <S.CustomModal
        title="Bình luận"
        open={showCommentsModal}
        onOk={handleCloseCommentsModal}
        onCancel={handleCloseCommentsModal}
        footer={null}
      >
        <S.CommentSection>
          <S.CommentsWrapper ref={commentsWrapperRef}>
            {renderComments(commentsData)}
          </S.CommentsWrapper>
          <S.Divider />
          <S.CommentBox>
            <S.CommentHeader>
              <S.Avatar src="jos.png" alt="Jos Phan Ái's avatar" />
              <S.CommentUser>{currentUserState}</S.CommentUser>
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
                }}
                onClick={handleAddComment}
              >
                Đăng
              </Button>
            </S.ButtonWrapper>
          </S.CommentBox>
        </S.CommentSection>
      </S.CustomModal>
    </S.PostWrapper>
  );
}

function findComment(comments: Comment[], commentId: number): Comment | null {
  for (const comment of comments) {
    if (comment.id === commentId) {
      return comment;
    }
    if (comment.replies) {
      const found = findComment(comment.replies, commentId);
      if (found) return found;
    }
  }
  return null;
}

function updateNestedComment(comments: Comment[], commentId: number | null, content: string): Comment[] {
  if (commentId === null) return comments;

  return comments.map(comment => {
    if (comment.id === commentId) {
      return { ...comment, content };
    }
    if (comment.replies) {
      return { ...comment, replies: updateNestedComment(comment.replies, commentId, content) };
    }
    return comment;
  });
}

function deleteNestedComment(comments: Comment[], commentId: number): Comment[] {
  return comments
    .map(comment => {
      if (comment.id === commentId) {
        return null;
      }
      if (comment.replies) {
        return { ...comment, replies: deleteNestedComment(comment.replies, commentId) };
      }
      return comment;
    })
    .filter(comment => comment !== null) as Comment[];
}

export default Post;
