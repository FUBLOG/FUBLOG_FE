"use client";
import Button from "@/components/core/common/Button";
import { useState } from "react";

import Post from "../Post";

import * as S from "./styles";
import TagRender from "./Tag";

function Home() {
  const [activeTag, setActiveTag] = useState("Tất cả");
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
      <S.MainWrapper>
        <S.ContentWrapper>
          <S.PostContainer>
            <TagRender />
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