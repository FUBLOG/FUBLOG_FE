"use client";

import Homelayout from "@/components/core/layouts/MainLayout";
import Sidebar from "../Sidebar";
import Post from "../Post";
import Button from "@/components/core/common/Button";
import * as S from "./styles"

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
         
          <Button type="default" children={"Gia đình"} />
          <Button type="default" children={"Bạn bè"} />
          <Button type="default" children={"Học tập"} />
          <Button type="default" children={"Công việc"} />
          <Button type="default" children={"Tình cảm"} />
          <Button type="default" children={"Khác"} />
          
          </S.TagsContainer>
          <Post
            user="Thanh Thủy"
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