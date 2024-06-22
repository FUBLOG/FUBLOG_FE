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
import TagRender from "./Tag";
import PostsRender from "./PostRender";

function Home() {
  const [activeTag, setActiveTag] = useState("Tất cả");
  const { posts, showSpinner } = useContext(PostContext);

  useEffect(() => {
    const setup = async () => {
      const res: any = await getRequest(tagEndpoint.GET_TAG);
      console.log(res?.metadata);

    };
    setup();
  }, [])
  return (
    <S.HomeWrapper>
      <S.MainWrapper>
        <S.ContentWrapper>
          <S.PostContainer>
            <TagRender />
            <PostsRender />
          </S.PostContainer>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.HomeWrapper>
  );
}

export default Home;