"use client";

import Homelayout from "@/components/core/layouts/Homelayout";
import Sidebar from "../sidebar";
import Post from "../post";
import * as S from "./styles";

function Main() {
  const reportHandler = () => {
    alert("Report clicked");
  };

  return (
    <Homelayout>
      <S.MainWrapper>
        <Sidebar />
        <S.PostContainer>
          <S.TagsContainer>
            <S.Tag>Tất cả</S.Tag>
            <S.Tag>Gia đình</S.Tag>
            <S.Tag>Bạn bè</S.Tag>
            <S.Tag>Học tập</S.Tag>
            <S.Tag>Công việc</S.Tag>
            <S.Tag>Tình cảm</S.Tag>
            <S.Tag>Khác</S.Tag>
          </S.TagsContainer>
          <Post
            user="Thanh Thuy"
            avatar="/thanhthuy.png"
            content="Hôm nay tôi học bài nè ..."
            images={["post.png", "post.png"]}
            tags={["Học tập"]}
            reportHandler={reportHandler}
          />
         <Post 
      user="Thanh Thuy" 
      avatar="/thanhthuy.png" 
      content="Nửa đêm dậy nấu mì ăn, gặp con gián ngồi tâm sự kể cho nó nghe những ngày qua mình đã ra sao... rồi lấy dép đập chết nó vì nó đã biết quá nhiều:(("
      images={[]}  
      tags={["Cuộc sống"]}
      reportHandler={() => console.log('Report post')}
/>

        </S.PostContainer>
      </S.MainWrapper>
    </Homelayout>
  );
}

export default Main;
