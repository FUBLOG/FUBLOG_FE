import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Button, Carousel, message, Radio, Space, Spin } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  ExclamationCircleOutlined,
  TagOutlined,
  EllipsisOutlined,
  EditFilled,
  DeleteOutlined,
  GlobalOutlined,
  LockOutlined,
  TeamOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import Typography from "@/components/core/common/Typography";
import { useAuthContext } from "@/contexts/AuthContext";
import CommentModal from "./Comment";
import * as S from "./styles";

import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";
import { useRouter, useSearchParams } from "next/navigation";
import {
  addLike,
  deletePost,
  getPostById,
  PostReportPost,
  unLike,
} from "@/services/api/post";

import useThemeStore from "@/hooks/useTheme";
import { PostContent } from "../UpdatePost/content";
import moment from "moment";
import useUpdatePost from "@/hooks/useUpdatePost";

interface PostProps {
  profileHash: any;
  profileSearch: any;
}

const PostProfile = ({ profileHash, profileSearch }: PostProps) => {
  const [deleteWithSpin, setDeleteWithSpin] = useState(false);
  const [listIsLike, setListIsLike] = useState<Record<string, boolean>>({});
  const [showEditMyPost, setEditMyPost] = useState(false);
  const { userInfo } = useAuthContext();
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState<any[]>([]);
  const [showReportModal, setShowReportModal] = useState(false);
  const [isPostReport, setIsPostReport] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [reportReason, setReportReason] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const postId = searchParams.get("pptId");
  const [comments, setComments] = useState<Record<string, number>>({});

  const icrComment = (postId: string, number: number) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: (prevComments[postId] || 0) + number,
    }));
  };

  const [editPost, setEditPost] = useState(false);
  const [showEnsure, setShowEnsure] = useState(false);
  const darkmode = useThemeStore((state) => state.darkMode);
  const audiance2: { [key: string]: any } = {
    public: <GlobalOutlined />,
    private: <LockOutlined />,
    friend: <TeamOutlined />,
  };
  const isFriend = profileSearch?.info?.friendList?.find(
    (friendID: any) => friendID === userInfo?._id
  );
  const fetchPosts = useCallback(async () => {
    if (profileSearch?.user?._id !== undefined) {
      const data = await getPostById(profileSearch?.user?._id);
      setPosts(data?.metadata || []);
      const initialLikes = data?.metadata.reduce((acc: any, post: any) => {
        acc[post._id] = post?.likes.includes(userInfo?._id);
        return acc;
      }, {});
      setListIsLike(initialLikes);
      const initialComment = data?.metadata.reduce((acc: any, post: any) => {
        acc[post._id] = post?.commentCount || 0;
        return acc;
      }, {});
      setComments(initialComment);
    }
  }, [profileSearch, userInfo]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleCloseSuccessModal = () => {
    setReportReason(null);

    setShowConfirmModal(false);
  };

  useEffect(() => {
    if (postId !== null) {
      setShowCommentsModal(true);
    }
  }, [postId]);

  const router = useRouter();
  const handleUpdate = () => {
    setEditPost(true);
  };
  const handleDelete = () => {
    setShowEnsure(true);
  };
  const handleOkDelete = async (id: string) => {
    try {
      setDeleteWithSpin(true);
      await deletePost(id);
    } catch (error) {
      message.error("Xóa bài viết thất bại");
    }
    setShowEnsure(false);
    setEditMyPost(false);
  };
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

  const handleLikeClick = (postId: string) => {
    if (webStorageClient.get(constants.IS_AUTH)) {
      setListIsLike((prevLikes) => ({
        ...prevLikes,
        [postId]: !prevLikes[postId],
      }));
      if (!listIsLike[postId]) {
        handleLike(postId);
      } else {
        handleUnLike(postId);
      }
    } else {
      message.warning("Vui lòng đăng nhập để bày tỏ cảm xúc.");
    }
  };
  const handleLike = (postId: string) => {
    const data = {
      postID: postId,
    };
    addLike(data)
      .then((res) => {
        router.refresh();
      })
      .catch((error) => {});
  };
  const handleUnLike = (postId: string) => {
    const data = {
      postID: postId,
    };
    unLike(data)
      .then((res) => {
        router.refresh();
      })
      .catch((error) => {});
  };

  const handleReport = async () => {
    setShowConfirmModal(false);
    const data = {
      postID: selectedPost?._id,
      reportContent: reportReason,
    };
    await PostReportPost(data);
    setReportReason(null);
    message.success("Báo cáo bài viết thành công");
  };

  const commentModal = useMemo(() => {
    if (!selectedPost || !showCommentsModal) return null;
    return (
      <CommentModal
        postId={selectedPost?._id}
        open={showCommentsModal}
        close={handleCloseCommentsModal}
        newfeed={selectedPost}
        icrComment={icrComment}
      />
    );
  }, [selectedPost, showCommentsModal]);

  const darkMode = useThemeStore((state) => state.darkMode);
  const handleCancel = () => {
    setEditPost(false);
  };
  const handleCreatePostSuccess = () => {
    setEditPost(false);
    setEditMyPost(false);
  };

  const postEditModal = useMemo(() => {
    return (
      <S.CreateModal
        open={editPost}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={false}
      >
        <PostContent
          postId={selectedPost?._id}
          existingContent={selectedPost?.postContent}
          existingTags={selectedPost?.postTagID}
          existingFiles={selectedPost?.postLinkToImages.map((url: string) => ({
            url,
          }))}
          existingAudience={selectedPost?.postStatus}
          onSuccess={handleCreatePostSuccess}
        />
      </S.CreateModal>
    );
  }, [editPost]);

  const editDeleteModal = useMemo(() => {
    return (
      <S.CustomModal
        className="edit-modal"
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
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {[` Chỉnh sửa bài viết`, `Xóa bài viết`].map((reason, index) => (
            <Button
              key={index}
              onClick={index === 0 ? handleUpdate : handleDelete}
            >
              {index === 0 ? <EditFilled /> : <DeleteOutlined />}
              {reason}
            </Button>
          ))}
        </Radio.Group>
      </S.CustomModal>
    );
  }, [showEditMyPost]);

  const deleteConfirmModal = useMemo(() => {
    return (
      <S.CustomModal
        title={"Bạn Có Muốn Xóa Bài Viết ?"}
        open={showEnsure}
        onCancel={() => setShowEnsure(false)}
        cancelText={"Hủy"}
        okText={"Tiếp tục"}
        onOk={() => {
          setShowSpinnerUpdate(true);
          handleOkDelete(selectedPost?._id);
          setTimeout(() => {
            setShowSpinnerUpdate(false);
            setDeleteWithSpin(false);
            window.location.reload();
          }, 3000);
        }}
      >
        Bài viết này sẽ xóa vĩnh viễn
      </S.CustomModal>
    );
  }, [showEnsure, selectedPost]);
  const reportModal = useMemo(() => {
    return (
      <S.CustomModal
        key={selectedPost?._id}
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
    );
  }, [showReportModal, reportReason, selectedPost]);

  const confirmReportModal = useMemo(() => {
    return (
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
    );
  }, [showConfirmModal, isPostReport, selectedPost]);
  const { showSpinnerUpdate, setShowSpinnerUpdate } = useUpdatePost();
  function handleClickReportPost(newfeed: any): void {
    setIsPostReport(true);
    setShowReportModal(true);
    setSelectedPost(newfeed);
  }

  return (
    <S.Container className={darkmode ? "theme-dark" : "theme-light"}>
      {commentModal}
      {confirmReportModal}
      {reportModal}
      {editDeleteModal}
      {deleteConfirmModal}
      {postEditModal}
      {showSpinnerUpdate && !deleteWithSpin && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Space>
            <Spin
              className="custom-spin"
              indicator={
                <LoadingOutlined color="#000" style={{ fontSize: 30 }} spin />
              }
            />
            <h4 style={{ color: darkmode ? "#F7D600" : "#000" }}>
              Đang Chỉnh Sửa
            </h4>
          </Space>
        </div>
      )}
      {showSpinnerUpdate && deleteWithSpin && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Space>
            <Spin
              className="custom-spin"
              indicator={
                <LoadingOutlined color="#000" style={{ fontSize: 30 }} spin />
              }
            />
            <h4 style={{ color: darkmode ? "#F7D600" : "#000" }}>Đang Xóa</h4>
          </Space>
        </div>
      )}
      {posts.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="caption-normal"
            color={darkMode ? "#fff" : "#352F44"}
            fontSize="18px"
            margin="50px 0px"
          >
            Chưa có bài viết
          </Typography>
        </div>
      ) : (
        posts
          ?.slice()
          .reverse()
          ?.map((newfeed: any) =>
            userInfo?.profileHash === profileHash ||
            (isFriend === undefined &&
              userInfo?.profileHash !== profileHash &&
              newfeed?.postStatus === "public") ||
            (userInfo?.profileHash !== profileHash &&
              isFriend !== undefined &&
              newfeed?.postStatus != "private") ? (
              <S.PostWrapper
                className={darkMode ? "theme-dark" : "theme-light"}
                key={newfeed?._id}
              >
                <S.CustomCard>
                  <S.PostHeader>
                    <S.UserInfo>
                      <S.Avatar
                        src={newfeed?.UserID?.userInfo?.avatar}
                        alt={`${newfeed?.UserID?.displayName}'s avatar`}
                      />

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                        }}
                      >
                        <>
                          <Typography
                            variant="caption-normal"
                            color={darkMode ? "#fff" : "#352F44"}
                            fontSize="18px"
                          >
                            {newfeed?.UserID?.displayName}
                          </Typography>
                        </>

                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            fontSize: "12px",
                            color: darkMode ? "#fff" : "#494747",
                            fontStyle: "oblique",
                          }}
                        >
                          {moment(newfeed?.updatedAt).fromNow()}
                          {audiance2[newfeed?.postStatus]}
                        </div>
                      </div>
                    </S.UserInfo>
                    {userInfo?.profileHash !== profileHash ? (
                      <ExclamationCircleOutlined
                        style={{
                          color: darkMode ? "#fff" : "#352F44",
                          cursor: "pointer",
                        }}
                        onClick={() => handleClickReportPost(newfeed)}
                      />
                    ) : (
                      <EllipsisOutlined
                        style={{
                          color: darkMode ? "#fff" : "#352F44",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setEditMyPost(true);
                          setSelectedPost(newfeed);
                        }}
                      />
                    )}
                  </S.PostHeader>

                  <S.ContentWrapper>
                    <Typography
                      variant="caption-small"
                      color={darkMode ? "#fff" : "#352F44"}
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
                      {listIsLike[newfeed?._id] ? (
                        <HeartFilled
                          style={{
                            color: darkMode ? "#fff" : "#352F44",
                            cursor: "pointer",
                          }}
                          onClick={() => handleLikeClick(newfeed?._id)}
                        />
                      ) : (
                        <HeartOutlined
                          style={{
                            color: darkMode ? "#fff" : "#352F44",
                            cursor: "pointer",
                          }}
                          onClick={() => handleLikeClick(newfeed?._id)}
                        />
                      )}
                      <span style={{ color: darkMode ? "#fff" : "#352F44" }}>
                        {listIsLike[newfeed?._id] ? 1 : 0}
                      </span>
                      <CommentOutlined
                        onClick={() => handleCommentClick(newfeed)}
                        style={{
                          color: darkMode ? "#fff" : "#352F44",
                          cursor: "pointer",
                        }}
                      />
                      <span style={{ color: darkMode ? "#fff" : "#352F44" }}>
                        {comments[newfeed?._id] || newfeed?.commentCount || 0}
                      </span>
                    </S.Actions>
                    <S.TagWrapper>
                      <S.Tag>
                        <Typography
                          variant="caption-small"
                          color={darkMode ? "#fff" : "#352F44"}
                          fontSize="14px"
                          lineHeight="2"
                        >
                          <TagOutlined style={{ marginRight: "10px" }} />
                          {newfeed?.postTagID?.postTagContent}
                        </Typography>
                      </S.Tag>
                    </S.TagWrapper>
                  </S.PostFooter>
                </S.CustomCard>
              </S.PostWrapper>
            ) : (
              <></>
            )
          )
      )}
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
    </S.Container>
  );
};

export default PostProfile;
