import React, {
  TouchEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { message, Radio, Carousel, Modal, Button, Tooltip } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  ExclamationCircleOutlined,
  TagOutlined,
  EllipsisOutlined,
  EditFilled,
  DeleteOutlined,
  WechatWorkOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Typography from "@/components/core/common/Typography";
import { useAuthContext } from "@/contexts/AuthContext";
import CommentModal from "./Comment";

import * as S from "./styles";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";
import { useRouter, useSearchParams } from "next/navigation";
import { getPostByPostId } from "@/services/api/post";
import useThemeStore from "@/hooks/useTheme";

interface PostProps {
  newfeed: any;
  postId: any;
  paramComment: any;
  setShowCommentsModal: any;
  setIsOpenByComment: any;
}

const Post = ({
  newfeed,
  setShowCommentsModal,
  setIsOpenByComment,
}: PostProps) => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const { userInfo } = useAuthContext();
  const [likes, setLikes] = useState(newfeed?.post?.countLike);
  const [liked, setLiked] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showEditMyPost, setEditMyPost] = useState(false);
  const [editPost, setEditPost] = useState();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [reportReason, setReportReason] = useState<string | null>(null);
  const [isPostReport, setIsPostReport] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [openPreviewInfo, setOpenPreviewInfo] = useState(false);

  const router = useRouter();
  let hoverTimeout: NodeJS.Timeout;

  const togleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleCloseSuccessModal = () => {
    setShowConfirmModal(false);
  };

  const handleCommentClick = useCallback(
    (newfeed: any) => {
      if (webStorageClient.get(constants.IS_AUTH)) {
        router.push(`?ptId=${newfeed?.post?._id}`);
        setIsOpenByComment(true);
      } else {
        message.warning("Vui lòng đăng nhập để bình luận.");
      }
    },
    [newfeed?.post?._id, router]
  );
  const onPreview = (src: any) => {
    setSelectedImage(src);
    setOpen(true);
  };

  function handleMouseOver(event: any) {
    event.target.style.textDecoration = "underline";
  }

  function handleMouseOut(event: any) {
    clearTimeout(hoverTimeout);
    event.target.style.textDecoration = "";
  }

  const previewInfor = () => {
    return (
      <S.PreviewInfo>
        <S.CustomCard>
          <S.PostHeader>
            <S.UserInfo onClick={handleClickProfile}>
              <S.Avatar
                src={newfeed?.userId?.userInfo?.avatar}
                alt={`${newfeed?.userId?.displayName}'s avatar`}
              />
              <Typography
                variant="caption-normal"
                color={darkMode ? "#B9B4C7" : "#352F44"}
                fontSize="18px"
              >
                {newfeed?.userId?.displayName}
              </Typography>
            </S.UserInfo>
          </S.PostHeader>
        </S.CustomCard>
        <S.ButtonWrapper>
          <Button icon={<UserOutlined />}>Bạn bè</Button>
          <Button icon={<WechatWorkOutlined />}>Nhắn tin</Button>
        </S.ButtonWrapper>
      </S.PreviewInfo>
    );
  };

  function handleClickProfile(): void {
    // router.push(`/profile?pId=${newfeed?.userId?.profileHash}`);
    router.push(`/profile?pId=ntthanhthuy274`);
  }

  return (
    <S.PostWrapper className={darkMode ? "theme-dark" : "theme-light"}>
      <S.CustomCard>
        <S.PostHeader>
          <Tooltip
            placement="top"
            title={previewInfor}
            color={"#B9B4C7"}
            mouseEnterDelay={0.5}
            fresh
          >
            <S.UserInfo
              onClick={handleClickProfile}
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={(e) => handleMouseOut(e)}
            >
              <S.Avatar
                src={newfeed?.userId?.userInfo?.avatar}
                alt={`${newfeed?.userId?.displayName}'s avatar`}
              />
              <Typography
                variant="caption-normal"
                color={darkMode ? "#B9B4C7" : "#352F44"}
                fontSize="18px"
              >
                {newfeed?.userId?.displayName}
              </Typography>
            </S.UserInfo>
          </Tooltip>
          {userInfo?._id !== newfeed?.userId?._id ? (
            <ExclamationCircleOutlined
              style={{
                color: darkMode ? "#B9B4C7" : "#352F44",
                cursor: "pointer",
              }}
              onClick={() => {
                setShowReportModal(true);
              }}
            />
          ) : (
            <EllipsisOutlined
              style={{
                color: darkMode ? "#B9B4C7" : "#352F44",
                cursor: "pointer",
              }}
              onClick={() => {
                setEditMyPost(true);
              }}
            />
          )}
        </S.PostHeader>

        <S.ContentWrapper>
          <Typography
            variant="caption-small"
            color={darkMode ? "#B9B4C7" : "#352F44"}
            fontSize="14px"
            lineHeight="2"
          >
            {newfeed?.post?.postContent}
          </Typography>
        </S.ContentWrapper>
        {newfeed?.post?.postLinkToImages.length === 1 && (
          <S.ImagesWrapper
            className={`images-${newfeed?.post?.postLinkToImages?.length}`}
          >
            <img
              src={newfeed?.post?.postLinkToImages[0]}
              alt=""
              className="post-image"
              onClick={() => onPreview(newfeed?.post?.postLinkToImages[0])}
            />
          </S.ImagesWrapper>
        )}
        {newfeed?.post?.postLinkToImages?.length > 1 && (
          <S.ImagesWrapper2>
            <Carousel arrows={true}>
              {newfeed?.post?.postLinkToImages?.map((src: any) => (
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
                style={{
                  color: darkMode ? "#B9B4C7" : "#352F44",
                  cursor: "pointer",
                }}
                onClick={togleLike}
              />
            ) : (
              <HeartOutlined
                style={{
                  color: darkMode ? "#B9B4C7" : "#352F44",
                  cursor: "pointer",
                }}
                onClick={togleLike}
              />
            )}
            <span style={{ color: darkMode ? "#B9B4C7" : "#352F44" }}>
              {likes}
            </span>
            <CommentOutlined
              onClick={() => handleCommentClick(newfeed)}
              style={{
                color: darkMode ? "#B9B4C7" : "#352F44",
                cursor: "pointer",
              }}
            />
            <span style={{ color: darkMode ? "#B9B4C7" : "#352F44" }}>
              {newfeed?.post?.commentCount}
            </span>
          </S.Actions>
          <S.TagWrapper>
            <S.Tag>
              <Typography
                variant="caption-small"
                color={darkMode ? "#B9B4C7" : "#352F44"}
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
      {/* Modal của preview ảnh */}

      <S.CustomModal
        title={"Quản lý bài viết"}
        open={showEditMyPost}
        onCancel={() => setEditMyPost(false)}
        cancelText={"Hủy"}
        okText={"Tiếp tục"}
        onOk={() => {
          setEditMyPost(false);
        }}
        style={{}}
      >
        <Radio.Group
          onChange={(e) => setReportReason(e.target.value)}
          value={reportReason}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {[` Chỉnh sửa bài viết`, `Xóa bài viết`].map((reason, index) => (
            <Button>
              {index === 0 ? <EditFilled /> : <DeleteOutlined />}
              {reason}
            </Button>
          ))}
        </Radio.Group>
      </S.CustomModal>
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
