"use client";
import styled from "styled-components";
import Homelayout from "@/components/core/layouts/MainLayout";
import Button from "@/components/core/common/Button";
import Post from "../Post";
import * as S from "./styles";

const ImportantButton = styled(Button)`
  background-color: #352f44 !important;
  color: #faf0e6 !important;
`;

function MainGuest() {
  const reportHandler = () => {
    alert("Report clicked");
  };

  return (
    <Homelayout>
      <S.MainWrapper>
        <S.PostContainer>
          <S.TagsContainer>
            <ImportantButton type="default">Gia đình</ImportantButton>
            <ImportantButton type="default">Bạn bè</ImportantButton>
            <ImportantButton type="default">Học tập</ImportantButton>
            <ImportantButton type="default">Công việc</ImportantButton>
            <ImportantButton type="default">Tình cảm</ImportantButton>
            <ImportantButton type="default">Khác</ImportantButton>
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
            user="Thanh Thuy"
            avatar="/thanhthuy.png"
            content="Nửa đêm dậy nấu mì ăn, gặp con gián ngồi tâm sự kể cho nó nghe những ngày qua mình đã ra sao... rồi lấy dép đập chết nó vì nó đã biết quá nhiều:(("
            images={[]}
            tags={["Cuộc sống"]}
        
            initialLikes={10}
            initialComments={2}
          />
        </S.PostContainer>
      </S.MainWrapper>
    </Homelayout>
  );
}

export default MainGuest;
