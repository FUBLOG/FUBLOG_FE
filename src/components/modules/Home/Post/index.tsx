import React, { useState } from "react";
import { message, Radio, Carousel, Modal } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  ExclamationCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import { useAuthContext } from "@/contexts/AuthContext";
import * as S from "./styles";
import CommentModal from "./Comment";

interface PostProps {
  newfeed: any;
}

const Post = ({ newfeed }: PostProps) => {
  const [likes, setLikes] = useState(newfeed?.post?.countLike);
  const [comments, setComments] = useState(newfeed?.post?.commentCount);
  const [liked, setLiked] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [reportReason, setReportReason] = useState<string | null>(null);
  const [isPostReport] = useState(false);
  const { userInfo } = useAuthContext();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // const toggleLike = () => {
  //   setLiked(!liked);
  //   setLikes(liked ? likes - 1 : likes + 1);
  // };
  const handleCloseSuccessModal = () => {
    setShowConfirmModal(false);
  };

  const handleCommentClick = () => {
    if (userInfo?.userId !== "") {
      setShowCommentsModal(true);
      return;
    }
    message.warning("Vui lòng đăng nhập để bình luận.");
  };

  const handleCloseCommentsModal = () => {
    setShowCommentsModal(false);
  };

  const icrComment = (number: number) => {
    setComments(comments + number);
  };
  const onPreview = (src: any) => {
    setSelectedImage(src);
    setOpen(true);
  };

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
          <S.ImagesWrapper className={`images-${newfeed?.post?.postLinkToImages.length}`}>
              <img src={newfeed?.post?.postLinkToImages[0]} alt="" className="post-image" onClick={() => onPreview(newfeed?.post?.postLinkToImages[0])} />
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
              <HeartFilled style={{ color: "white", cursor: "pointer" }} />
            ) : (
              <HeartOutlined style={{ color: "white", cursor: "pointer" }} />
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
      >
        <Typography variant="caption-small">
          {isPostReport
            ? "Bạn có chắc chắn muốn báo cáo bài viết này không?"
            : "Bạn có chắc chắn muốn báo cáo bình luận này không?"}
        </Typography>
      </S.CustomModal>
      <CommentModal
        close={handleCloseCommentsModal}
        open={showCommentsModal}
        newfeed={newfeed}
        icrComment={icrComment}
      />
      {/* Modal của preview ảnh */}
      <div className="imgWrapper">
      <S.ImageModal
        visible={open}
        footer={null}
        onCancel={() => setOpen(false)}
        centered
        styles={{content : {padding : "0"}}}
        closable={false}
      >
        <div style={{ textAlign: "center"}}>
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
