"use client"
import React, { useState } from "react";
import { Modal, message } from 'antd';
import Button from "@/components/core/common/Button";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  ExclamationCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";

interface Comment {
  id: number;
  user: string;
  avatar: string;
  content: string;
}

interface PostProps {
  user: string;
  avatar: string;
  content: string;
  images: string[];
  tag: string;
  initialLikes: number;
  initialComments: number;
  initialCommentsData: Comment[];
}

function Post({
  user,
  avatar,
  content,
  images,
  tag,
  initialLikes,
  initialComments,
  initialCommentsData = [],
}: Readonly<PostProps>) {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentsData, setCommentsData] = useState(initialCommentsData);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleReportClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmReport = () => {
    setShowConfirmModal(false);
    message.success("Báo cáo bài viết thành công");
  };
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleCommentClick = () => {
    setShowCommentsModal(true);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentData = {
        id: commentsData.length + 1,
        user: "Jos Phan Ái",
        avatar: "jos.png",
        content: newComment,
      };
      setCommentsData([...commentsData, newCommentData]);
      setComments(comments + 1);
      setNewComment("");
    }
  };

  const handleCloseCommentsModal = () => {
    setShowCommentsModal(false);
  };

  return (
    <S.PostWrapper>
      <S.CustomCard>
        <S.PostHeader>
          <S.UserInfo>
            <S.Avatar src={avatar} alt={`${user}'s avatar`} />
            <Typography
              variant="caption-normal"
              color="#B9B4C7"
              fontSize="18px"
            >
              {user}
            </Typography>
          </S.UserInfo>
          <ExclamationCircleOutlined
            onClick={handleReportClick}
            style={{ color: "#FAF0E6", cursor: "pointer" }}
          />
        </S.PostHeader>

        <S.ContentWrapper>
          <Typography
            variant="caption-small"
            color="#B9B4C7"
            fontSize="14px"
            lineHeight="2"
          >
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
              <HeartFilled
                style={{ color: "white", cursor: "pointer" }}
                onClick={toggleLike}
              />
            ) : (
              <HeartOutlined
                style={{ color: "white", cursor: "pointer" }}
                onClick={toggleLike}
              />
            )}
            <span>{likes}</span>
            <CommentOutlined
              style={{ color: "white", cursor: "pointer" }}
              onClick={handleCommentClick}
            />
            <span>{comments}</span>
          </S.Actions>
          <S.TagWrapper>
              <S.Tag>
                <Typography
                  variant="caption-small"
                  color="#B9B4C7"
                  fontSize="14px"
                  lineHeight="2"
                >
                  <TagOutlined style={{ marginRight: "10px" }} />
                  {tag}
                </Typography>
              </S.Tag>
          </S.TagWrapper>
        </S.PostFooter>
      </S.CustomCard>

      <S.CustomModal
        title="Báo cáo bài viết"
        open={showConfirmModal}
        onOk={handleConfirmReport}
        onCancel={() => setShowConfirmModal(false)}
        cancelText={"Hủy"}
        okText={"Báo cáo"}
      >
        <Typography variant="caption-small">
          Bài viết này vi phạm quy chuẩn cộng đồng, bạn muốn báo cáo lên Quản
          trị viên?
        </Typography>
      </S.CustomModal>

      <S.CustomModal
        title="Báo cáo thành công"
        open={showSuccessModal}
        onOk={handleCloseSuccessModal}
        onCancel={handleCloseSuccessModal}
        okText={"Ok"}
      ></S.CustomModal>

      <S.CustomModal
        title="Bình luận"
        open={showCommentsModal}
        onOk={handleCloseCommentsModal}
        onCancel={handleCloseCommentsModal}
        footer={null}
      >
       <S.CommentSection>
  <S.PostContent>
    <S.CommentHeader>
      <S.Avatar src={avatar} alt={`${user}'s avatar`} />
      <S.CommentUser>{user}</S.CommentUser>
    </S.CommentHeader>
    <S.CommentContent>
      <S.Content>
        <S.Stroke />
        {content}
      </S.Content>
    </S.CommentContent>
  </S.PostContent>
  <S.CommentsWrapper>
    {commentsData?.map((comment) => (
      <S.Comment key={comment.id}>
        <S.CommentHeader>
          <S.Avatar src={comment.avatar} alt={`${comment.user}'s avatar`} />
          <S.CommentUser>{comment.user}</S.CommentUser>
        </S.CommentHeader>
        <S.CommentContent>{comment.content}</S.CommentContent>
      </S.Comment>
    ))}
  </S.CommentsWrapper>
  <S.Divider />
  <S.CommentBox>
    <S.CommentHeader>
      <S.Avatar src="jos.png" alt="Jos Phan Ái's avatar" />
      <S.CommentUser>Jos Phan Ái</S.CommentUser>
    </S.CommentHeader>
    <S.TextArea
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder="Viết bình luận..."
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
