"use client";
import Button from "@/components/core/common/Button";
import { useState, useContext } from "react";
import Sidebar from "../Sidebar";
import Post from "../Post";
import * as S from "./styles";
import { PostContext } from "@/components/core/layouts/MainLayout/Context";

function Home() {
  const [activeTag, setActiveTag] = useState("Tất cả");
  const { posts } = useContext(PostContext);
  const tags = [
    "Tất cả",
    "Gia đình",
    "Bạn bè",
    "Học tập",
    "Công việc",
    "Tình cảm",
    "Khác",
  ];

  return (
    <S.HomeWrapper>
      <Sidebar />
      <S.MainWrapper>
        <S.ContentWrapper>
          <S.PostContainer>
            <S.TagsContainer>
              {tags.map((tag) => (
                <Button
                  key={tag}
                  type="default"
                  $hoverBackgroundColor="#FAF0E6"
                  $hoverColor="#352F44"
                  $width={"84px"}
                  onClick={() => setActiveTag(tag)}
                  $backgroundColor={
                    activeTag === tag ? "#FAF0E6 " : "transparent"
                  }
                >
                  {tag}
                </Button>
              ))}
            </S.TagsContainer>
            {posts.map((post, index) => (
              <Post
                key={index}
                user={post.user }
                avatar={post.avatar }
                content={post.content }
                images={post.images }
                tag={post.tag as string }
                initialLikes={post.initialLikes }
                initialComments={post.initialComments}
                initialCommentsData={post.initialCommentsData}
              />
            ))}
          </S.PostContainer>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.HomeWrapper>
  );
}

export default Home;
