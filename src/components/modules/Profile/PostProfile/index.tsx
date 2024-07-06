import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Carousel, message, Radio } from "antd";
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
import { useRouter, useSearchParams } from "next/navigation";
import { getPostById } from "@/services/api/post";
import Link from "next/link";

interface PostProps {
  profileHash: any;
  profileSearch: any;
}

const PostProfile = ({ profileHash, profileSearch }: PostProps) => {
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState<any[]>([]);
  const [showReportModal, setShowReportModal] = useState(false);
  const [isPostReport, setIsPostReport] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [reportReason, setReportReason] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const postId = searchParams.get("pptId");

  const fetchPosts = useCallback(async () => {
    if (profileSearch?.user?._id !== undefined) {
      const data = await getPostById(profileSearch?.user?._id);
      setPosts(data?.metadata || []);
    }
  }, [profileSearch]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleCloseSuccessModal = () => {
    setShowConfirmModal(false);
  };

  useEffect(() => {
    if (postId !== null) {
      setShowCommentsModal(true);
    }
  }, [postId]);

  const router = useRouter();

  const handleCommentClick = (newfeed: any) => {
    if (webStorageClient.get(constants.IS_AUTH)) {
      setSelectedPost(newfeed);
      router.push(`?pId=${profileHash}&pptId=${newfeed?._id}`);
      setShowCommentsModal(true);
      return;
    }
    message.warning("Vui lòng đăng nhập để bình luận.");
  };

  const handleCloseCommentsModal = () => {
    router.back();
    setShowCommentsModal(false);
  };

  const onPreview = (src: any) => {
    setSelectedImage(src);
    setOpen(true);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const commentModal = useMemo(() => {
    if (!selectedPost || !showCommentsModal) return null;
    return (
      <CommentModal
        postId={selectedPost?._id}
        open={showCommentsModal}
        close={handleCloseCommentsModal}
        newfeed={selectedPost}
        icrComment={selectedPost?.commentCount}
      />
    );
  }, [selectedPost, showCommentsModal]);

  return (
    <>
      {posts?.map((newfeed: any) => (
        <S.PostWrapper key={newfeed?._id}>
          <S.CustomCard>
            <S.PostHeader>
              <S.UserInfo>
                <S.Avatar
                  src={profileSearch?.info?.avatar}
                  alt={`${profileSearch?.user?.displayName}'s avatar`}
                />
                <Typography
                  variant="caption-normal"
                  color="#B9B4C7"
                  fontSize="18px"
                >
                  {profileSearch?.user?.displayName}
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
                {newfeed?.postContent}
              </Typography>
            </S.ContentWrapper>
            {newfeed?.postLinkToImages?.length === 1 && (
              <S.ImagesWrapper
                className={`images-${newfeed?.postLinkToImages.length}`}
              >
                <img
                  src={newfeed?.postLinkToImages[0]}
                  alt=""
                  className="post-image"
                  onClick={() => onPreview(newfeed?.postLinkToImages[0])}
                />
              </S.ImagesWrapper>
            )}
            {newfeed?.postLinkToImages?.length > 1 && (
              <S.ImagesWrapper2>
                <Carousel arrows={true}>
                  {newfeed?.postLinkToImages?.map((src: any) => (
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
                <span>{newfeed?.countLike}</span>
                <CommentOutlined
                  onClick={() => handleCommentClick(newfeed)}
                  style={{ color: "white", cursor: "pointer" }}
                />
                <span>{newfeed?.commentCount}</span>
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
                    {newfeed?.postTagID}
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
              if (!reportReason) {
                message.warning("Vui lòng chọn lý do báo cáo.");
                return;
              }
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
        </S.PostWrapper>
      ))}
      {commentModal}
      <div className="imgWrapper">
        <S.ImageModal
          open={open}
          onCancel={() => setOpen(false)}
          footer={null}
          bodyStyle={{ padding: 0 }}
        >
          <img
            src={selectedImage}
            alt="Full-size preview"
            style={{ width: "100%" }}
          />
        </S.ImageModal>
      </div>
    </>
  );
};

export default PostProfile;
