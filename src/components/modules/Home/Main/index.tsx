"use client";
import Homelayout from "@/components/core/layouts/MainLayout";
import Button from "@/components/core/common/Button";

import Sidebar from "../Sidebar";
import Post from "../Post";

import * as S from "./styles";

function Home() {
  const isGuest = false;
  return (
    <>
      <S.HomeWrapper>
        <Sidebar isGuest={isGuest} />
        <S.MainWrapper>
          <S.ContentWrapper>
            <S.PostContainer>
              <S.TagsContainer>
                <Button
                  type="default"
                  $hoverBackgroundColor="#FAF0E6"
                  $hoverColor="#352F44"
                  $width={"84px"}
                >
                  Tất cả
                </Button>

                <Button
                  type="default"
                  $hoverBackgroundColor="#FAF0E6"
                  $hoverColor="#352F44"
                  $width={"84px"}
                >
                  Gia đình
                </Button>

                <Button
                  type="default"
                  $hoverBackgroundColor="#FAF0E6"
                  $hoverColor="#352F44"
                  $width={"84px"}
                >
                  Bạn bè
                </Button>
                <Button
                  type="default"
                  $hoverBackgroundColor="#FAF0E6"
                  $hoverColor="#352F44"
                  $width={"84px"}
                >
                  Học tập
                </Button>
                <Button
                  type="default"
                  $hoverBackgroundColor="#FAF0E6"
                  $hoverColor="#352F44"
                  $width={"84px"}
                >
                  Công việc
                </Button>
                <Button
                  type="default"
                  $hoverBackgroundColor="#FAF0E6"
                  $hoverColor="#352F44"
                  $width={"84px"}
                >
                  Tình cảm
                </Button>
                <Button
                  type="default"
                  $hoverBackgroundColor="#FAF0E6"
                  $hoverColor="#352F44"
                  $width={"84px"}
                >
                  Khác
                </Button>
              </S.TagsContainer>
              <Post
                user="Thanh Thủy"
                avatar="/thanhthuy.png"
                content="Hôm nay tôi học bài nè ..."
                images={["post.png", "post.png"]}
                tags={["Học tập"]}
                initialLikes={10}
                initialComments={2}
              />
              <Post
                user="Thanh Thủy"
                avatar="/thanhthuy.png"
                content="Nửa đêm dậy nấu mì ăn, gặp con gián ngồi tâm sự kể cho nó nghe những ngày qua mình đã ra sao... rồi lấy dép đập chết nó vì nó đã biết quá nhiều:(("
                images={[]}
                tags={["Cuộc sống"]}
                initialLikes={10}
                initialComments={2}
              />
            </S.PostContainer>
          </S.ContentWrapper>
        </S.MainWrapper>
      </S.HomeWrapper>
    </>
  );
}

export default Home;
