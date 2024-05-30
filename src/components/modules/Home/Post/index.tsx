import React, { useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  ExclamationCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import Button from "@/components/core/common/Button";
import Modal from "antd/es/modal/Modal";
import Typography from "@/components/core/common/Typography";

interface PostProps {
  user: string;
  avatar: string;
  content: string;
  images: string[];
  tags: string[];
  initialLikes: number;
  initialComments: number;
}

function Post({
  user,
  avatar,
  content,
  images,
  tags,
  initialLikes,
  initialComments,
}: Readonly<PostProps>) {
  const [likes, setLikes] = useState(initialLikes);
  const [comments] = useState(initialComments);
  const [liked, setLiked] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleReportClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmReport = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
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
            <CommentOutlined style={{ color: "white" }} />
            <span>{comments}</span>
          </S.Actions>
          <S.TagWrapper>
            {tags.map((tag) => (
              <S.Tag key={tag}>
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
            ))}
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
      >
        <Typography variant="caption-small">
          Báo cáo bài viết thành công
        </Typography>
      </S.CustomModal>
    </S.PostWrapper>
  );
}

export default Post;
