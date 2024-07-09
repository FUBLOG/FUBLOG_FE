"use client";

import React from "react";
import Typography from "@/components/core/common/Typography";
import * as S from "@/components/modules/Profile/introduce/styles"
import { useProfile } from "@/hooks/useProfile";
import moment from "moment";
import {
  BookOutlined,
  CalendarOutlined,
  HeartOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import useThemeStore from "@/hooks/useTheme";
function Introduce() {
  const darkMode = useThemeStore((state) => state.darkMode);
  const { profile } = useProfile();
  const format = "DD/MM/YYYY";
  return (
    <S.Wrapper>
      <Typography
        variant="body-text-small-bold"
        fontSize="18px"
        color={darkMode ? "white" : "#352F44"}
      >
        Giới thiệu
      </Typography>
      <S.InfoContainer className={darkMode ? "theme-dark" : "theme-light"}>
        {profile?.info?.relationship !== "" ? (
          <S.InfoItem>
            <HeartOutlined
              style={{
                color: darkMode ? "white" : "#352F44",
                fontSize: "16px",
                marginRight: "8px",
              }}
            />
            <Typography
              variant="body-text-small-normal"
              color={darkMode ? "white" : "#352F44"}
              fontSize="14px"
            >
              {profile?.info?.relationship === "single"
                ? "Độc thân"
                : "Có mối quan hệ phức tạp"}
            </Typography>
          </S.InfoItem>
        ) : (
          <></>
        )}
        {profile?.user?.sex ? (
          <S.InfoItem>
            <WomanOutlined
              style={{
                color: darkMode ? "white" : "#352F44",
                fontSize: "16px",
                marginRight: "8px",
              }}
            />
            <Typography
              variant="body-text-small-normal"
              color={darkMode ? "white" : "#352F44"}
              fontSize="14px"
            >
              {profile?.user?.sex}
            </Typography>
          </S.InfoItem>
        ) : (
          <></>
        )}
        {profile?.user?.dateOfBirth !== "" ? (
          <S.InfoItem>
            <CalendarOutlined
              style={{
                color: darkMode ? "white" : "#352F44",
                fontSize: "16px",
                marginRight: "8px",
              }}
            />
            <Typography
              variant="body-text-small-normal"
              color={darkMode ? "white" : "#352F44"}
              fontSize="14px"
            >
              {moment(profile?.user?.dateOfBirth).format(format)}
            </Typography>
          </S.InfoItem>
        ) : (
          <></>
        )}
        {profile?.info?.education !== "" ? (
          <S.InfoItem>
            <BookOutlined
              style={{ color: "#fff", fontSize: "16px", marginRight: "8px" }}
            />
            <Typography
              variant="body-text-small-normal"
              color="#fff !important"
              fontSize="14px"
            >
              {profile?.info?.education}
            </Typography>
          </S.InfoItem>
        ) : (
          <></>
        )}
      </S.InfoContainer>
    </S.Wrapper>
  );
}

export default Introduce;