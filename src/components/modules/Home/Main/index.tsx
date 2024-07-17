"use client";
import { useState, useEffect } from "react";
import * as S from "./styles";
import { getRequest } from "@/services/request";
import { tagEndpoint } from "@/services/endpoint";
import TagRender from "./Tag";
import PostsRender from "./PostRender";
import useUpdatePost from "@/hooks/useUpdatePost";
import { Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Home() {
  const {showSpinnerUpdate} = useUpdatePost();

  useEffect(() => {
    const setup = async () => {
      await getRequest(tagEndpoint.GET_TAG);
    };
    setup();
  }, []);

  return (
    
    <S.HomeWrapper>
      <S.MainWrapper>
        <S.ContentWrapper>
          <S.PostContainer>
            <TagRender />
            {showSpinnerUpdate && (
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
                  <h4 style={{ color: "#ccc" }}>Đang Chỉnh Sửa</h4>
                </Space>
              </div>
            )}
            <PostsRender />
          </S.PostContainer>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.HomeWrapper>
  );
}

export default Home;
