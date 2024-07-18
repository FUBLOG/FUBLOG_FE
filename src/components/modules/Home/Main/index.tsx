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
import useThemeStore from "@/hooks/useTheme";

function Home() {
  const { showSpinnerUpdate } = useUpdatePost();
  const darkmode = useThemeStore((state) => state.darkMode);
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
          <S.PostContainer className={darkmode ? "theme-dark" : "theme-light"}>
            <TagRender />
            {showSpinnerUpdate && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Space>
                  <Spin
                    className="custom-spin"
                    indicator={
                      <LoadingOutlined
                        color="#000"
                        style={{ fontSize: 30 }}
                        spin
                      />
                    }
                  />
                  <h4 style={{ color: darkmode ? "#F7D600" : "#000" }}>Đang Chỉnh Sửa</h4>
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
