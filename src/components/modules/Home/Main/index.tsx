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
    const user = webStorageClient.get("currentUser");
    setIsGuest(!isAuth);
    setCurrentUser(user || "Jos Phan Ái"); 
  }, []);

  return (
    <S.HomeWrapper>
      <Sidebar isGuest={isGuest} />
      <S.MainWrapper>
        <S.ContentWrapper>
          <S.TagsContainer>
           
            <Button type="default" $borderColor="#fff" $hoverBackgroundColor="#FAF0E6" $hoverColor="#352F44 " $width={"84px"} ><span style={{color:"#B9B4C7 !important" } }>Tất cả</span></Button>
            <Button type="default" $borderColor="#fff" $hoverBackgroundColor="#FAF0E6" $hoverColor="#352F44" $width={"84px"}><span style={{color:"#B9B4C7 !important"} }>Gia đình</span></Button>
            <Button type="default" $borderColor="#fff" $hoverBackgroundColor="#FAF0E6" $hoverColor="#352F44" $width={"84px"}><span style={{color:"#B9B4C7 !important"} }>Bạn bè</span></Button>
            <Button type="default" $borderColor="#fff" $hoverBackgroundColor="#FAF0E6" $hoverColor="#352F44" $width={"84px"}><span style={{color:"#B9B4C7 !important"} }>Học tập</span></Button>
            <Button type="default" $borderColor="#fff" $hoverBackgroundColor="#FAF0E6" $hoverColor="#352F44" $width={"84px"}><span style={{color:"#B9B4C7 !important"} }>Công việc</span></Button>
            <Button type="default" $borderColor="#fff" $hoverBackgroundColor="#FAF0E6" $hoverColor="#352F44" $width={"84px"}><span style={{color:"#B9B4C7 !important"} }>Tình cảm</span></Button>
            <Button type="default" $borderColor="#fff" $hoverBackgroundColor="#FAF0E6" $hoverColor="#352F44" $width={"84px"}><span style={{color:"#B9B4C7 !important"} }>Khác</span></Button>
          </S.TagsContainer>
          <S.PostContainer>
            <Post
              user="Thanh Thủy"
              avatar="/thanhthuy.png"
              content="Hôm nay tôi học bài ..."
              images={["post.jpg"]}
              tags={["Học tập"]}
              initialLikes={10}
              initialComments={5}
              initialCommentsData={[
                { id: 1, user: "Thu Phương", avatar: "/thuphuong.png", content: "giỏi quá c ơi" },
                { id: 2, user: "Vĩnh Trung", avatar: "./vinhtrung.png", content: "Cho học với" },
                { id: 3, user: "Văn Mạnh", avatar: "./vanmanh.png", content: "Đi ăn kem" },
              ]}
              currentUser={currentUser}  
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
                { id: 1, user: "Thu Phương", avatar: "/thuphuong.png", content: "giỏi quá c ơi" },
                { id: 2, user: "Vĩnh Trung", avatar: "./vinhtrung.png", content: "Cho học với" },
                { id: 3, user: "Văn Mạnh", avatar: "./vanmanh.png", content: "Đi ăn kem" },
              ]}
              currentUser={currentUser}  
            />
          </S.PostContainer>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.HomeWrapper>
  );
}

export default Home;
