import React, { useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  ExclamationCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Modal, Button } from 'antd';
import styled from 'styled-components';
import * as S from "./styles";

interface PostProps {
  user: string;
  avatar: string;
  content: string;
  images: string[];
  tags: string[];
  initialLikes: number;
  initialComments: number;
}

const CustomModal = styled(Modal)`
  .ant-modal-content {
    background-color: #faf0e6;
    padding: 20px 11px;
  }
  .ant-modal-header {
    background-color: #faf0e6;
  }
  .ant-modal-footer {
    background-color: #faf0e6;
  }

  .ant-modal-title {
    background-color: #faf0e6;
  }
  .ant-btn-primary {
    background: #352f44;
  }
`;

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
            <S.UserName>{user}</S.UserName>
          </S.UserInfo>
          <ExclamationCircleOutlined
            onClick={handleReportClick}
            style={{ color: "#FAF0E6", cursor: "pointer" }}
          />
        </S.PostHeader>

        <S.ContentWrapper>
          <S.Content>{content}</S.Content>
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
                <TagOutlined style={{ fontSize: "22px" }} /> {tag}
              </S.Tag>
            ))}
          </S.TagWrapper>
        </S.PostFooter>
      </S.CustomCard>

   
      <CustomModal
        title="Báo cáo bài viết"
        visible={showConfirmModal}
        onOk={handleConfirmReport}
        onCancel={() => setShowConfirmModal(false)}
        footer={[
          <Button key="back" onClick={() => setShowConfirmModal(false)}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" onClick={handleConfirmReport}>
            Xác nhận
          </Button>,
        ]}
      >
        <p>Bài viết này vi phạm quy chuẩn cộng đồng, bạn muốn báo cáo lên Quản trị viên?</p>
      </CustomModal>

    
      <CustomModal
        title="Báo cáo thành công"
        visible={showSuccessModal}
        onOk={handleCloseSuccessModal}
        onCancel={handleCloseSuccessModal}
        footer={[
          <Button key="submit" type="primary" onClick={handleCloseSuccessModal}>
            Ok
          </Button>,
        ]}
      >
        <p>Báo cáo bài viết thành công</p>
      </CustomModal>
    </S.PostWrapper>
  );
}

export default Post;
