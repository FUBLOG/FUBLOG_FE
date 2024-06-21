"use client";
import Button from "@/components/core/common/Button";
import { useState, useContext, useEffect } from "react";
import Post from "../Post";
import * as S from "./styles";
import { PostContext } from "@/components/core/layouts/MainLayout/Context";
import { Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { getRequest } from "@/services/request";
import { tagEndpoint } from "@/services/endpoint";

function Home() {
  const [activeTag, setActiveTag] = useState("Tất cả");
  const { posts, showSpinner } = useContext(PostContext);
  const [tags,setTags] = useState<any[]>([]);

  useEffect( () => {
    const setup = async () => {
      const res: any = await getRequest(tagEndpoint.GET_TAG);
      setTags(res?.metadata);
      console.log(res?.metadata);
      
    };
    setup();
  },[])
  return (
    <S.HomeWrapper>
      <S.MainWrapper>
        <S.ContentWrapper>
          <S.PostContainer>
            <S.TagsContainer>
               <Button
                  type="default"
                  $hoverBackgroundColor="#FAF0E6"
                  $hoverColor="#352F44"
                  $width={"84px"}
                  onClick={() => setActiveTag("Tất Cả")}
                  $backgroundColor={
                    activeTag === "Tất Cả" ? "#FAF0E6 " : "transparent"
                  }
                >
                  Tất Cả
                </Button>
              {tags.map((tag) => (
                <Button
                  key={tag}
                  type="default"
                  $hoverBackgroundColor="#FAF0E6"
                  $hoverColor="#352F44"
                  $width={"84px"}
                  onClick={() => setActiveTag(tag?.postTagContent)}
                  $backgroundColor={
                    activeTag === tag?.postTagContent ? "#FAF0E6 " : "transparent"
                  }
                >
                  {tag?.postTagContent}
                </Button>
              ))}
            </S.TagsContainer>
            {showSpinner && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Space>
                  <Spin
                    className="custom-spin"
                    indicator={
                      <LoadingOutlined
                        color="#ccc"
                        style={{ fontSize: 30 }}
                        spin
                      />
                    }
                  />
                  <h4 style={{ color: "#ccc" }}>Đang tạo bài viết</h4>
                </Space>
              </div>
            )}

            {posts.map(
              (post) => 
                ((post.tag as string) === activeTag as string || activeTag === "Tất Cả") &&(
                  <Post
                    key={post.id}
                    user={post.user}
                    avatar={post.avatar}
                    content={post.content}
                    images={post.images}
                    tag={post.tag as string}
                    initialLikes={post.initialLikes}
                    initialComments={post.initialComments}
                    initialCommentsData={post.initialCommentsData}
                  />
                )
            )
            }
          </S.PostContainer>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.HomeWrapper>
  );
}

export default Home;
