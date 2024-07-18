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

function translateRelationship(relationship: string): string {
  switch (relationship) {
    case "single":
      return "Độc thân";
    case "married":
      return "Đã kết hôn";
    case "divorced":
      return "Đã ly hôn";
    case "complicated":
      return "Có mối quan hệ phức tạp";
    case "in a relationship":
      return "Đang hẹn hò";
    default:
      return relationship;
  }
}


function translateRelationship(relationship: string): string {
  switch (relationship) {
    case "single":
      return "Độc thân";
    case "married":
      return "Đã kết hôn";
    case "divorced":
      return "Đã ly hôn";
    case "complicated":
      return "Có mối quan hệ phức tạp";
    case "in a relationship":
      return "Đang hẹn hò";
    default:
      return relationship;
  }
}

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
            <Typography className={darkMode ? "theme-dark" : "theme-light"}
              variant="body-text-small-normal"
              color={darkMode ? "white" : "#352F44"}
              fontSize="14px"
            >
              {translateRelationship(profile?.info?.relationship || "single")}
              {translateRelationship(profile?.info?.relationship || "single")}
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
            <Typography className={darkMode ? "theme-dark" : "theme-light"}
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
            <Typography className={darkMode ? "theme-dark" : "theme-light"}
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
              style={{ fontSize: "16px", marginRight: "8px", color: darkMode ? "white" : "#352F44" }}
            />
            <Typography className={darkMode ? "theme-dark" : "theme-light"}
              variant="body-text-small-normal"
              color={darkMode ? "white" : "#352F44"}
              color={darkMode ? "white" : "#352F44"}
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
