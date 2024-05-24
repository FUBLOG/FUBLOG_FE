"use client";

import { Card } from "antd";
import { HeartOutlined, CommentOutlined, ExclamationCircleOutlined, TagOutlined } from "@ant-design/icons";
import * as S from "./styles";

interface PostProps {
  user: string;
  avatar: string;
  content: string;
  images: string[];
  tags: string[];
  reportHandler: () => void;
}

function Post({ user, avatar, content, images, tags, reportHandler }: Readonly<PostProps>) {
  return (
    <S.PostWrapper>
      <Card
        title={
          <S.PostHeader>
            <S.Avatar src={avatar} alt={`${user}'s avatar`} />
            <S.UserName>{user}</S.UserName>
          </S.PostHeader>
        }
        extra={<ExclamationCircleOutlined onClick={reportHandler} style={{ color: '#fff' }} />}
        bordered={false}
        style={{ backgroundColor: "transparent" }}
      >
        <S.Content>{content}</S.Content>
        {images.length > 0 && (
          <S.ImagesWrapper>
            {images.map((src) => (
              <img key={src} src={src} alt={`Post Image`} />
            ))}
          </S.ImagesWrapper>
        )}
        <S.PostFooter>
          <S.Actions style={{ fontSize: '24px' }}>
            <HeartOutlined />
            <CommentOutlined />
          </S.Actions>
          <S.TagWrapper>
            {tags.map((tag) => (
              <S.Tag key={tag}>
                <TagOutlined style={{ fontSize: '24px' }} /> {tag}
              </S.Tag>
            ))}
          </S.TagWrapper>
        </S.PostFooter>
      </Card>
    </S.PostWrapper>
  );
}

export default Post;
