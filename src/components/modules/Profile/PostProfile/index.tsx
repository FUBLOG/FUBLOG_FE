import React, { useState } from "react";
import { Dropdown, Menu, message, Radio } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  EllipsisOutlined,
  TagOutlined,
} from "@ant-design/icons";
import Typography from "@/components/core/common/Typography";
import { useAuthContext } from "@/contexts/AuthContext";
import CommentModal from "./Comment";
import * as S from "./styles";

interface PostProps {
  newfeed?: {
    post: {
      countLike: number;
      commentCount: number;
      postContent: string;
      postLinkToImages: string[];
      postTagID: {
        postTagContent: string;
      };
    };
    userId: {
      userInfo: {
        avatar: string;
      };
      displayName: string;
    };
  };
}

const PostProfile: React.FC<PostProps> = ({ newfeed }) => {
  const defaultNewfeed = {
    post: {
      countLike: 0,
      commentCount: 0,
      postContent: "Hôm nay là..",
      postLinkToImages: [],
      postTagID: {
        postTagContent: "Bạn bè",
      },
    },
    userId: {
      userInfo: {
        avatar: "/default-avatar.png",
      },
      displayName: "Thu phương",
    },
  };

  const data = newfeed || defaultNewfeed;

  const [likes, setLikes] = useState(data.post.countLike);
  const [comments, setComments] = useState(data.post.commentCount);
  const [liked, setLiked] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const { userInfo } = useAuthContext();

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleCommentClick = () => {
    if (userInfo?._id !== "") {
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

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "edit") {
      message.info("Chỉnh sửa bài viết");
    } else if (key === "delete") {
      message.info("Xóa bài viết");
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="edit">Chỉnh sửa bài viết</Menu.Item>
      <Menu.Item key="delete">Xóa bài viết</Menu.Item>
    </Menu>
  );

  return (
    <S.PostWrapper>
      <S.CustomCard>
        <S.PostHeader>
          <S.UserInfo>
            <S.Avatar
              src={data.userId.userInfo.avatar}
              
            alt={`${data.userId.displayName}'s avatar`}
            />
            <Typography
              variant="body-text-small-bold"
              color="#fff"
              fontSize="18px"
            >
              {data.userId.displayName}
            </Typography>
          </S.UserInfo>
          <Dropdown overlay={menu} trigger={["click"]}>
            <EllipsisOutlined
              style={{ color: "#FAF0E6", cursor: "pointer" }}
              onClick={(e) => e.stopPropagation()}
            />
          </Dropdown>
        </S.PostHeader>

        <S.ContentWrapper>
          <Typography
            variant="caption-small"
            color="#fff"
            fontSize="14px"
            lineHeight="2"
            margin="0px 20px"
          >
            {data.post.postContent}
          </Typography>
        </S.ContentWrapper>
        {data.post.postLinkToImages.length > 0 && (
          <S.ImagesWrapper
            className={`images-${data.post.postLinkToImages.length}`}
          >
            {data.post.postLinkToImages.slice(0, 3).map((src: string) => (
              <img key={src} src={src} alt="" className="post-image" />
            ))}
            {data.post.postLinkToImages.length > 3 && (
              <div className="more-images">
                <span>
                  View more {data.post.postLinkToImages.length - 3} images
                </span>
              </div>
            )}
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
                {data.post.postTagID.postTagContent}
              </Typography>
            </S.Tag>
          </S.TagWrapper>
        </S.PostFooter>
      </S.CustomCard>

      <CommentModal
        close={handleCloseCommentsModal}
        open={showCommentsModal}
        newfeed={data}
        icrComment={icrComment}
      />
    </S.PostWrapper>
  );
};

export default PostProfile;
