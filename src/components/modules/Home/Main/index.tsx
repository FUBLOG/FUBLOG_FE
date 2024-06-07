"use client";
import Button from "@/components/core/common/Button";

import Sidebar from "../Sidebar";
import Post from "../Post";

import * as S from "./styles";
import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { act, useEffect, useState } from "react";

function Home() {
  const [isGuest, setIsGuest] = useState(true);
  const [activeTag, setActiveTag] = useState("Tất cả");

  useEffect(() => {
    setIsGuest(!webStorageClient.get(constants.IS_AUTH));
  });

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
      <Sidebar isGuest={isGuest} />
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
                  id: 1,
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
                  id: 1,
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