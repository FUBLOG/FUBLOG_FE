import React, { useState } from 'react';
import { HeartOutlined, HeartFilled, CommentOutlined,ExclamationCircleOutlined,TagOutlined} from "@ant-design/icons";
import * as S from "./styles";

interface PostProps {
  user: string;
  avatar: string;
  content: string;
  images: string[];
  tags: string[];
  initialLikes: number;
  initialComments: number;
  reportHandler: () => void;
}

function Post({ user, avatar, content, images, tags, initialLikes, initialComments, reportHandler }: Readonly<PostProps>) {
  const [likes, setLikes] = useState(initialLikes);
  const [comments] = useState(initialComments); 
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1); 
  };

  return (
    <S.PostWrapper>
      <S.CustomCard>
        <S.PostHeader>
          <S.UserInfo>
            <S.Avatar src={avatar} alt={`${user}'s avatar`} />
            <S.UserName>{user}</S.UserName>
          </S.UserInfo>
          <ExclamationCircleOutlined onClick={reportHandler} style={{ color: '#fff' }} />
        </S.PostHeader>
       
        <S.ContentWrapper>
          <S.Content>{content}</S.Content>
        </S.ContentWrapper>
        
        {images.length > 0 && (
          <S.ImagesWrapper>
            {images.map((src, index) => (
              <img key={index} src={src} alt="Post Image" />
            ))}
          </S.ImagesWrapper>
        )}
        
        <S.PostFooter>
          <S.Actions>
            {liked ? (
              <HeartFilled style={{ color: 'white', cursor: 'pointer' }} onClick={toggleLike} />
            ) : (
              <HeartOutlined style={{ color: 'white', cursor: 'pointer' }} onClick={toggleLike} />
            )}
            <span>{likes}</span>
            <CommentOutlined style={{ color: 'white' }} />
            <span>{comments}</span>
          </S.Actions>
          <S.TagWrapper>
          {tags.map((tag) => (
              <S.Tag key={tag}>
                <TagOutlined style={{ fontSize: '22px' }} /> {tag}
              </S.Tag>
            ))}
          </S.TagWrapper>
        </S.PostFooter>
      </S.CustomCard>
    </S.PostWrapper>
  );
}

export default Post;
