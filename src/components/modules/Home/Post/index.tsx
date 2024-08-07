import React, { useCallback, useEffect, useState } from "react";
import {
  message,
  Radio,
  Carousel,
  Modal,
  Button,
  Tooltip,
  Space,
  Spin,
} from "antd";
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
  LoadingOutlined,
  GlobalOutlined,
  LockOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Typography from "@/components/core/common/Typography";
import { useAuthContext } from "@/contexts/AuthContext";

import * as S from "./styles";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";
import { useRouter } from "next/navigation";
import {
  addLike,
  deletePost,
  PostReportPost,
  unLike,
} from "@/services/api/post";
import useThemeStore from "@/hooks/useTheme";
import { PostContent } from "../../UpdatePost/content";
import moment from "moment";
import "moment/locale/vi";

interface PostProps {
  newfeed: any;
  postId: any;
  paramComment: any;
  setShowCommentsModal: any;
  setIsOpenByComment: any;
  updatePost: any;
  comment: any;
}

const Post = ({
  comment,
  updatePost,
  newfeed,
  setShowCommentsModal,
  setIsOpenByComment,
}: PostProps) => {
  const [showCreate, setShowCreate] = useState(false);
  const handleCreatePostSuccess = () => {
    setEditPost(false);
    setEditMyPost(false);
  };

  const handleCancel = () => {
    setEditPost(false);
  };
  moment.locale("vi");
  const darkMode = useThemeStore((state) => state.darkMode);
  const { userInfo } = useAuthContext();
  const [likes, setLikes] = useState(newfeed?.post?.likes?.length);
  const [liked, setLiked] = useState(false);
  const [listLike, setListLike] = useState(newfeed?.post?.likes);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showEditMyPost, setEditMyPost] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [reportReason, setReportReason] = useState<string | null>(null);
  const [isPostReport, setIsPostReport] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showEnsure, setShowEnsure] = useState(false);
  const [postContent, setPostContent] = useState(newfeed?.post?.postContent);
  const [postTags, setPostTags] = useState(newfeed?.post?.postTagID);
  const [postImages, setPostImages] = useState(
    newfeed?.post?.postLinkToImages.map((url: string) => ({ url }))
  );
  const [timeAgo, setTimeAgo] = useState("");
  const audiance2: { [key: string]: any } = {
    public: <GlobalOutlined />,
    private: <LockOutlined />,
    friend: <TeamOutlined />,
  };
  const [selectedPost, setSelectedPost] = useState<any>();
  const [postAudience, setPostAudience] = useState(newfeed?.post?.status);
  const audienceValue = audiance2[postAudience];
  const router = useRouter();
  let hoverTimeout: NodeJS.Timeout;
  useEffect(() => {
    setListLike(newfeed?.post?.likes);
    const liked = listLike?.includes(userInfo?._id);
    setLiked(liked);
    setTimeAgo(moment(newfeed?.post?.updatedAt).fromNow());
  }, [newfeed, userInfo, listLike]);

  useEffect(() => {
    setPostContent(newfeed?.post?.postContent);
    setPostTags(newfeed?.post?.postTagID);
    setPostImages(
      newfeed?.post?.postLinkToImages.map((url: string) => ({ url }))
    );
    setPostAudience(newfeed?.post?.postStatus);
  }, [newfeed]);
  const togleLike = () => {
    if (webStorageClient.get(constants.IS_AUTH)) {
      if (!liked) {
        handleLike();
      } else {
        handleUnLike();
      }
      setLiked(!liked);
      setLikes(liked ? likes - 1 : likes + 1);
    } else {
      message.warning("Vui lòng đăng nhập để bày tỏ cảm xúc.");
    }
  };

  const handleCloseSuccessModal = () => {
    setShowConfirmModal(false);
  };
  const handleLike = () => {
    if (newfeed?.post?._id !== null) {
      const data = {
        postID: newfeed?.post?._id,
      };
      addLike(data)
        .then((res) => {
          router.refresh();
        })
        .catch((error) => {});
    }
  };
  const handleUnLike = () => {
    if (newfeed?.post?._id !== null) {
      const data = {
        postID: newfeed.post._id,
      };
      unLike(data)
        .then((res) => {
          router.refresh();
        })
        .catch((error) => {});
    }
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
                color={darkMode ? "#fff" : "#000"}
                fontSize="18px"
              >
                {newfeed?.userId?.displayName}
              </Typography>
            </S.UserInfo>
          </S.PostHeader>
        </S.CustomCard>
        <Button icon={<WechatWorkOutlined />}>Nhắn tin</Button>
      </S.PreviewInfo>
    );
  };
  const handleUpdate = () => {
    setEditPost(true);
  };
  const handleDelete = () => {
    setShowEnsure(true);
  };
  const handleOkDelete = async () => {
    try {
      await deletePost(newfeed?.post?._id);
    } catch (error) {
      message.error("Xóa bài viết thất bại");
    }
    setShowEnsure(false);
    setEditMyPost(false);
  };

  function handleClickProfile(): void {
    router.push(`/profile?pId=${newfeed?.userId?.profileHash}`);
  }

  const handleReport = async () => {
    setShowConfirmModal(false);
    const data = {
      postID: selectedPost?.post?._id,
      reportContent: reportReason,
    };
    await PostReportPost(data);
    message.success("Báo cáo bài viết thành công");
  };

  return (
    <>
      <S.PostWrapper className={darkMode ? "theme-dark" : "theme-light"}>
        <S.CustomCard>
          <S.PostHeader>
            <S.UserInfo
              onClick={handleClickProfile}
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={(e) => handleMouseOut(e)}
            >
              <S.Avatar
                src={newfeed?.userId?.userInfo?.avatar}
                alt={`${newfeed?.userId?.displayName}'s avatar`}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                }}
              >
                <Typography
                  variant="caption-normal"
                  color={darkMode ? "#fff" : "#000"}
                  fontSize="18px"
                >
                  <div>{newfeed?.userId?.displayName}</div>
                </Typography>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "12px",
                    color: darkMode ? "#fff" : "#494747",
                    fontStyle: "oblique",
                  }}
                >
                  {timeAgo}
                  {audienceValue}
                </div>
              </div>
            </S.UserInfo>

            {userInfo?._id !== newfeed?.userId?._id ? (
              <ExclamationCircleOutlined
                style={{
                  color: darkMode ? "#fff" : "#000",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShowReportModal(true);
                  setSelectedPost(newfeed);
                }}
              />
            ) : (
              <div style={{ position: "relative" }}>
                <EllipsisOutlined
                  style={{
                    color: darkMode ? "#fff" : "#000",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setEditMyPost(true);
                  }}
                />
              </div>
            )}
          </S.PostHeader>

          <S.ContentWrapper>
            <Typography
              variant="caption-small"
              color={darkMode ? "#fff" : "#000"}
              fontSize="14px"
              lineHeight="2"
            >
              {newfeed?.post?.postContent}
            </Typography>
          </S.ContentWrapper>
          {newfeed?.post?.postLinkToImages.length === 1 && (
            <>
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
            </>
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
                    color: darkMode ? "#fff" : "#000",
                    cursor: "pointer",
                  }}
                  onClick={togleLike}
                />
              ) : (
                <HeartOutlined
                  style={{
                    color: darkMode ? "#fff" : "#000",
                    cursor: "pointer",
                  }}
                  onClick={togleLike}
                />
              )}
              <span style={{ color: darkMode ? "#fff" : "#000" }}>{likes}</span>
              <CommentOutlined
                onClick={() => handleCommentClick(newfeed)}
                style={{
                  color: darkMode ? "#fff" : "#000",
                  cursor: "pointer",
                }}
              />
              <span style={{ color: darkMode ? "#fff" : "#000" }}>
                {comment}
              </span>
            </S.Actions>
            <S.TagWrapper>
              <S.Tag>
                <Typography
                  variant="caption-small"
                  color={darkMode ? "#fff" : "#000"}
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
            handleReport();
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
          title={"Bạn Có Muốn Xóa Bài Viết ?"}
          open={showEnsure}
          onCancel={() => setShowEnsure(false)}
          cancelText={"Hủy"}
          okText={"Tiếp tục"}
          onOk={handleOkDelete}
        >
          Bài viết này sẽ xóa vĩnh viễn{" "}
        </S.CustomModal>

        <S.CustomModal
          title={"Quản lý bài viết"}
          open={showEditMyPost}
          onCancel={() => setEditMyPost(false)}
          cancelText={"Hủy"}
          okText={"Tiếp tục"}
          onOk={() => {
            setEditMyPost(false);
          }}
        >
          <Radio.Group
            onChange={(e) => setReportReason(e.target.value)}
            value={reportReason}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {[`Chỉnh sửa bài viết`, `Xóa bài viết`].map((reason, index) => (
              <Button onClick={index === 0 ? handleUpdate : handleDelete}>
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
        <S.CreateModal
          open={editPost}
          onCancel={handleCancel}
          destroyOnClose={true}
          footer={false}
        >
          <PostContent
            postUpdate={updatePost}
            postId={newfeed?.post?._id}
            existingContent={postContent}
            existingTags={postTags}
            existingFiles={postImages}
            existingAudience={postAudience}
            onSuccess={handleCreatePostSuccess}
          />
        </S.CreateModal>
      </S.PostWrapper>
    </>
  );
};

export default Post;
