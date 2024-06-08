"use client";
import Button from "@/components/core/common/Button";
import Sidebar from "../Sidebar";
import Post from "../Post";
import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { useEffect, useState } from "react";
import * as S from "./styles";

function Home() {
  const [isGuest, setIsGuest] = useState(true);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const isAuth = webStorageClient.get(constants.IS_AUTH);
    const user = webStorageClient.get("currentUser") || "Anonymous";
    setIsGuest(!isAuth);
    setCurrentUser(user);
  }, []);

  return (
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
              content="Hôm nay tôi học bài ..."
              images={["post.jpg"]}
              tags={["Học tập"]}
              initialLikes={10}
              initialComments={5}
              initialCommentsData={[
                {
                  id: 1,
                  user: "Thu Phương",
                  avatar: "/thuphuong.png",
                  content: "giỏi quá c ơi",
                },
                {
                  id: 2,
                  user: "Vĩnh Trung",
                  avatar: "./vinhtrung.png",
                  content: "Cho học với",
                },
                {
                  id: 3,
                  user: "Văn Mạnh",
                  avatar: "./vanmanh.png",
                  content: "Đi ăn kem",
                },
              ]}
            />
            <Post
              user="Thanh Thủy"
              avatar="/thanhthuy.png"
              content="Nửa đêm dậy nấu mì ăn, gặp con gián ngồi tâm sự kể cho nó nghe những ngày qua mình đã ra sao... rồi lấy dép đập chết nó vì nó đã biết quá nhiều:(("
              images={[]}
              tags={["Cuộc sống"]}
              initialLikes={10}
              initialComments={5}
              initialCommentsData={[
                {
                  id: 1,
                  user: "Thu Phương",
                  avatar: "/thuphuong.png",
                  content: "giỏi quá c ơi",
                },
                {
                  id: 2,
                  user: "Vĩnh Trung",
                  avatar: "./vinhtrung.png",
                  content: "Cho học với",
                },
                {
                  id: 3,
                  user: "Văn Mạnh",
                  avatar: "./vanmanh.png",
                  content: "Đi ăn kem",
                },
              ]}
            />
          </S.PostContainer>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.HomeWrapper>
  );
}

export default Home;
