import React, { useState } from "react";
import { message, Radio } from "antd";
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

interface PostProps {
  newfeed: any;
}

const Post = ({ newfeed }: PostProps) => {
  const [likes, setLikes] = useState(newfeed?.post?.countLike);
  const [comments, setComments] = useState(newfeed?.post?.commentCount);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { userInfo } = useAuthContext();

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleCommentClick = () => {
    if (userInfo?.userId !== "") {
      setShowComments(!showComments);
      return;
    }
    message.warning("Vui lòng đăng nhập để bình luận.");
  };

  const incrementCommentCount = (number: number) => {
    setComments(comments + number);
  };

  return (
    <S.PostWrapper showComments={showComments}>
      <S.PostContentWrapper>
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
          {newfeed?.post?.postLinkToImages.length > 0 && (
            <S.ImagesWrapper
              className={`images-${newfeed?.post?.postLinkToImages.length}`}
            >
              {newfeed?.post?.postLinkToImages.slice(0, 3).map((src: any) => (
                <img key={src} src={src} alt="" className="post-image" />
              ))}
              {newfeed?.post?.postLinkToImages.length > 3 && (
                <div className="more-images">
                  <span>
                    View more {newfeed?.post?.postLinkToImages.length - 3} images
                  </span>
                </div>
              )}
            </S.ImagesWrapper>
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
      </S.PostContentWrapper>

      {showComments && (
        <S.CommentsSection>
          <CommentModal
            close={() => setShowComments(false)}
            open={showComments}
            newfeed={newfeed}
            icrComment={incrementCommentCount}
          />
        </S.CommentsSection>
      )}
    </S.PostWrapper>
  );
};

export default Post;
