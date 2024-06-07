"use client";
import React, { useState, useEffect, useRef } from "react";
import { Modal, message, Menu, Dropdown, Radio } from "antd";
import { HeartOutlined, HeartFilled, CommentOutlined, ExclamationCircleOutlined, EllipsisOutlined, TagOutlined } from "@ant-design/icons";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import * as S from "./styles";
import webStorageClient from "@/utils/webStorageClient";

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
}: Readonly<PostProps>) {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [commentsData, setCommentsData] = useState(initialCommentsData);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [currentUser, setCurrentUser] = useState("Anonymous");
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(null);
  const [reportReason, setReportReason] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<number | null>(null); // Track editing comment ID

  const editInputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const user = webStorageClient.get("currentUser") || "Jos Phan Ái";
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    if (editInputRef.current && editMode !== null) {
      editInputRef.current.focus();
      editInputRef.current.setSelectionRange(editInputRef.current.value.length, editInputRef.current.value.length);
    }
  }, [editMode]);
  

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleReportClick = (commentId: number) => {
    setSelectedCommentId(commentId);
    setShowReportModal(true);
  };

  const handleConfirmReport = () => {
    setShowReportModal(false);
    setShowConfirmModal(true);
  };

  const handleFinalReport = () => {
    setShowConfirmModal(false);
    message.success("Báo cáo bình luận thành công");
  };

  const handleCloseSuccessModal = () => {
    setShowConfirmModal(false);
  };

  const handleCommentClick = () => {
    setShowCommentsModal(true);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentData = {
        id: commentsData.length + 1,
        user: currentUser,
        avatar: "jos.png",
        content: newComment,
        parentId: selectedCommentId || null,
        replies: [], // Initialize replies array for new comments
      };

      let updatedComments;
      if (selectedCommentId) {
        // If it's a reply, find the parent and update its replies
        updatedComments = commentsData.map((comment) => {
          if (comment.id === selectedCommentId) {
            const newReplies = comment.replies ? [...comment.replies, newCommentData] : [newCommentData];
            return { ...comment, replies: newReplies };
          }
          return comment;
        });
      } else {
        // If it's a top-level comment, add it directly
        updatedComments = [...commentsData, newCommentData];
      }

      setCommentsData(updatedComments);
      setComments(comments + 1);
      setNewComment("");
      setSelectedCommentId(null);
    }
  };

  const handleCloseCommentsModal = () => {
    setShowCommentsModal(false);
  };

  const handleEditComment = (commentId: number) => {
    const commentToEdit = commentsData.find(comment => comment.id === commentId);
    if (commentToEdit) {
      setEditMode(commentId);
      setEditComment(commentToEdit.content);
    }
  };

  const handleUpdateComment = () => {
    const updatedComments = commentsData.map((comment) =>
      comment.id === editMode ? { ...comment, content: editComment } : comment
    );
    setCommentsData(updatedComments);
    setEditMode(null);
    setEditComment("");
  };

  const handleDeleteComment = (commentId: number) => {
    const updatedComments = commentsData.filter(comment => comment.id !== commentId);
    setCommentsData(updatedComments);
    setComments(comments - 1);
  };

  const handleReplyComment = (commentId: number) => {
    const parentComment = commentsData.find(comment => comment.id === commentId);
    if (parentComment) {
      setNewComment(`@${parentComment.user} `);
      setSelectedCommentId(commentId);
      setShowCommentsModal(true);

      // Set timeout to ensure the modal is open and the textarea is rendered
      setTimeout(() => {
        if (editInputRef.current) {
          editInputRef.current.focus();
          // Set cursor at the end of the text
          const len = editInputRef.current.value.length;
          editInputRef.current.setSelectionRange(len, len);
        }
      }, 100);
    }
  };

  const renderCommentMenu = (comment: Comment) => (
    <Menu>
      {comment.user === currentUser ? (
        <>
          <Menu.Item key="edit" onClick={() => handleEditComment(comment.id)}>
            Chỉnh sửa
          </Menu.Item>
          <Menu.Item key="delete" onClick={() => handleDeleteComment(comment.id)}>
            Xóa
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="reply" onClick={() => handleReplyComment(comment.id)}>
            Phản hồi
          </Menu.Item>
          <Menu.Item key="report" onClick={() => handleReportClick(comment.id)}>
            Báo cáo
          </Menu.Item>
        </>
      )}
    </Menu>
  );

  const renderComments = (commentsArray: Comment[], depth = 0) => {
    return commentsArray.map((comment) => (
      <React.Fragment key={comment.id}>
        <S.Comment style={{ marginLeft: `${depth * 20}px` }}>
          <S.CommentHeader>
            <S.Avatar src={comment.avatar} alt={`${comment.user}'s avatar`} />
            <S.CommentUser>{comment.user}</S.CommentUser>
            <Dropdown overlay={renderCommentMenu(comment)} trigger={['click']}>
              <EllipsisOutlined style={{ cursor: "pointer" }} />
            </Dropdown>
          </S.CommentHeader>
          {editMode === comment.id ? (
            <>
              <S.TextArea
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
                autoFocus
                onFocus={(e) => {
                  const value = e.target.value;
                  e.target.value = '';
                  e.target.value = value; // This trick ensures the cursor is at the end
                }}
                ref={editInputRef}
              />
              <Button
                color="red"
                type="primary"
                style={{
                  width: "100px",
                  marginTop: "10px",
                  padding: "5px 10px",
                  border: "none",
                  alignSelf: "flex-end",
                }}
                onClick={handleUpdateComment}
              >
                Cập nhật
              </Button>
            </>
          ) : (
            <S.CommentContent>{comment.content}</S.CommentContent>
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
          <ExclamationCircleOutlined onClick={() => setShowConfirmModal(true)} style={{ color: "#FAF0E6", cursor: "pointer" }} />
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
        title="Báo cáo bình luận"
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
            "Ảnh khỏa thân",
            "Bạo lực",
            "Quấy rối",
            "Tự tử hoặc tự gây thương tích",
            "Thông tin sai sự thật",
            "Spam",
            "Chất cấm, chất gây nghiện",
            "Bán hàng trái phép",
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
        onCancel={() => setShowConfirmModal(false)}
        cancelText={"Hủy"}
        okText={"Báo cáo"}
      >
        <Typography variant="caption-small">
          Bạn có chắc chắn muốn báo cáo bình luận này không?
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
          <S.CommentsWrapper>
            {renderComments(commentsData)}
          </S.CommentsWrapper>
          <S.Divider />
          <S.CommentBox>
            <S.CommentHeader>
              <S.Avatar src="jos.png" alt="Jos Phan Ái's avatar" />
              <S.CommentUser>{currentUser}</S.CommentUser>
            </S.CommentHeader>
            <S.TextArea
  value={newComment}
  onChange={(e) => setNewComment(e.target.value)}
  placeholder="Viết bình luận..."
  className={newComment.includes('@') ? 'blinking-cursor' : ''} // Apply cursor style if mentioning
  ref={editInputRef} // Reference to focus the textarea
/>
            <Button
              color="red"
              type="primary"
              style={{
                width: "100px",
                marginTop: "10px",
                padding: "5px 10px",
                border: "none",
                alignSelf: "flex-end",
              }}
              onClick={handleAddComment}
            >
              Đăng
            </Button>
          </S.CommentBox>
        </S.CommentSection>
      </S.CustomModal>
    </S.PostWrapper>
  );
}

export default Post;
