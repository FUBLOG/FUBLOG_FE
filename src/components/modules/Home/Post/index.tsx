import React, { useEffect, useMemo, useState } from "react";
import { message, Radio, Carousel, Modal } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  ExclamationCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";
import Typography from "@/components/core/common/Typography";
import { useAuthContext } from "@/contexts/AuthContext";
import CommentModal from "./Comment";

import * as S from "./styles";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";
import { useRouter } from "next/navigation";

interface PostProps {
  newfeed: any;
  postId: any;
  paramComment: any;
}

const Post = ({ newfeed, postId, paramComment }: PostProps) => {
  const [likes, setLikes] = useState(newfeed?.post?.countLike);
  const [comments, setComments] = useState(newfeed?.post?.commentCount);
  const [liked, setLiked] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [reportReason, setReportReason] = useState<string | null>(null);
  const [isPostReport, setIsPostReport] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  // const togleLike = () => {
  //   setLiked(!liked);
  //   setLikes(liked ? likes - 1 : likes + 1);
  // };
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleCloseSuccessModal = () => {
    setShowConfirmModal(false);
  };

  const router = useRouter();

  const handleCommentClick = (newfeed: any) => {
    if (webStorageClient.get(constants.IS_AUTH)) {
      setSelectedPost(newfeed);
      router.push(`?pptId=${newfeed?.post?._id}`);
      setShowCommentsModal(true);
      return;
    }
    message.warning("Vui lòng đăng nhập để bình luận.");
  };

  const handleCloseCommentsModal = () => {
    router.back();
    setShowCommentsModal(false);
  };

  const icrComment = (number: number) => {
    setComments(comments + number);
  };
  const onPreview = (src: any) => {
    setSelectedImage(src);
    setOpen(true);
  };
  const commentModal = useMemo(() => {
    console.log("selectedPost", selectedPost);

    if (!selectedPost || !showCommentsModal) return null;
    return (
      <CommentModal
        postId={selectedPost?.post?._id}
        open={showCommentsModal}
        close={handleCloseCommentsModal}
        newfeed={selectedPost}
        icrComment={selectedPost?.commentCount}
      />
    );
  }, [selectedPost, showCommentsModal]);

  return (
    <S.PostWrapper>
      <S.CustomCard>
        <S.PostHeader>
          <S.UserInfo>
            <S.Avatar
              src={newfeed?.userId?.userInfo?.avatar}
              alt={`${newfeed?.userId?.displayName}'s avatar`}
            />
            <Typography
              variant="caption-normal"
              color="#B9B4C7"
              fontSize="18px"
            >
              {newfeed?.userId?.displayName}
            </Typography>
          </S.UserInfo>
          <ExclamationCircleOutlined
            style={{ color: "#FAF0E6", cursor: "pointer" }}
            onClick={() => {
              setShowReportModal(true);
            }}
          />
        </S.PostHeader>

        <S.ContentWrapper>
          <Typography
            variant="caption-small"
            color="#B9B4C7"
            fontSize="14px"
            lineHeight="2"
          >
            {newfeed?.post?.postContent}
          </Typography>
        </S.ContentWrapper>
        {newfeed?.post?.postLinkToImages.length === 1 && (
          <S.ImagesWrapper
            className={`images-${newfeed?.post?.postLinkToImages.length}`}
          >
            <img
              src={newfeed?.post?.postLinkToImages[0]}
              alt=""
              className="post-image"
              onClick={() => onPreview(newfeed?.post?.postLinkToImages[0])}
            />
          </S.ImagesWrapper>
        )}
        {newfeed?.post?.postLinkToImages.length > 1 && (
          <S.ImagesWrapper2>
            <Carousel arrows={true}>
              {newfeed?.post?.postLinkToImages.map((src: any) => (
                <img
                  key={src}
                  src={src}
                  alt="Post Image"
                  className="post-image"
                  onClick={() => onPreview(src)}
                />
              ))}
            </Carousel>
          </S.ImagesWrapper2>
        )}

        <S.PostFooter>
          <S.Actions>
            {liked ? (
              <HeartFilled
                style={{ color: "white", cursor: "pointer" }}
                onClick={handleLikeClick}
              />
            ) : (
              <HeartOutlined
                style={{ color: "white", cursor: "pointer" }}
                onClick={handleLikeClick}
              />
            )}
            <span>{newfeed?.post?.countLike}</span>
            <CommentOutlined
              onClick={() => handleCommentClick(newfeed)}
              style={{ color: "white", cursor: "pointer" }}
            />
            <span>{newfeed?.post?.commentCount}</span>
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
                {newfeed?.post?.postTagID?.postTagContent}
              </Typography>
            </S.Tag>
          </S.TagWrapper>
        </S.PostFooter>
      </S.CustomCard>

      <S.CustomModal
        title={isPostReport ? "Báo cáo bài viết" : "Báo cáo bình luận"}
        open={showReportModal}
        onCancel={() => setShowReportModal(false)}
        cancelText={"Hủy"}
        okText={"Tiếp tục"}
        onOk={() => {
          setShowConfirmModal(true);
          setShowReportModal(false);
        }}
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
            "khác",
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
        onCancel={handleCloseSuccessModal}
        cancelText={"Hủy"}
        okText={"Báo cáo"}
        onOk={() => {
          setShowConfirmModal(false),
            message.success("Báo cáo bài viết thành công");
        }}
      >
        <Typography variant="caption-small">
          {isPostReport
            ? "Bạn có chắc chắn muốn báo cáo bài viết này không?"
            : "Bạn có chắc chắn muốn báo cáo bình luận này không?"}
        </Typography>
      </S.CustomModal>
      {commentModal}

      {/* Modal của preview ảnh */}
      <div className="imgWrapper">
        <S.ImageModal
          visible={open}
          footer={null}
          onCancel={() => setOpen(false)}
          centered
          styles={{ content: { padding: "0" } }}
          closable={false}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedImage}
              alt="Preview"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </S.ImageModal>
      </div>
    </S.PostWrapper>
  );
};

export default Post;
