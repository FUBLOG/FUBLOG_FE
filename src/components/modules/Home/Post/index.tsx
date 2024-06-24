import React, { useState, useEffect, useRef } from "react";
import { message, Dropdown, Menu, Radio } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  ExclamationCircleOutlined,
  EllipsisOutlined,
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
  const [isPostReport, setIsPostReport] = useState(false);
  const { userInfo } = useAuthContext();



  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };



  // const handlePostReportClick = () => {
  //   setIsPostReport(true);
  //   setShowReportModal(true);
  //   setShowCommentsModal(false);
  // };

  // const handleConfirmReport = () => {
  //   if (!reportReason) {
  //     message.error("Vui lòng chọn vấn đề để báo cáo.");
  //     return;
  //   }
  //   setShowReportModal(false);
  //   setShowConfirmModal(true);
  // };

  // const handleFinalReport = () => {
  //   setShowConfirmModal(false);
  //   message.success(
  //     isPostReport
  //       ? "Báo cáo bài viết thành công"
  //       : "Báo cáo bình luận thành công"
  //   );
  //   setReportReason(null);
  //   setSelectedCommentId(null);
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
  }







  return (
    <S.PostWrapper>
      <S.CustomCard>
        <S.PostHeader>
          <S.UserInfo>
            <S.Avatar src={newfeed?.userId?.userInfo?.avatar} alt={`${newfeed?.userId?.displayName}'s avatar`} />
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
        {newfeed?.post?.postLinkToImages.length > 0 && (
          <S.ImagesWrapper className={`images-${newfeed?.post?.postLinkToImages.length}`}>
            {newfeed?.post?.postLinkToImages.slice(0, 3).map((src: any) => (
              <img key={src} src={src} alt="" className="post-image" />
            ))}
            {newfeed?.post?.postLinkToImages.length > 3 && (
              <div className="more-images">
                <span>View more {newfeed?.post?.postLinkToImages.length - 3} images</span>
              </div>
            )}
          </S.ImagesWrapper>
        )}

        <S.PostFooter>
          <S.Actions>
            {liked ? (
              <HeartFilled
                style={{ color: "white", cursor: "pointer" }}
              />
            ) : (
              <HeartOutlined
                style={{ color: "white", cursor: "pointer" }}
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
      <CommentModal close={handleCloseCommentsModal} open={showCommentsModal} newfeed={newfeed} icrComment={icrComment} />
    </S.PostWrapper>
  );
}


export default Post;
