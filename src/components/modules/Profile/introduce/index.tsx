"use client";

import React from "react";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";
import {
  HeartOutlined,
  WomanOutlined,
  CalendarOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { useProfile } from "@/hooks/useProfile";
import moment from "moment";

const relationshipStatusMap: { [key: string]: string } = {
  single: "Độc thân",
  married: "Đã kết hôn",
  divorced: "Đã ly hôn",
  complicated: "Có mối quan hệ phức tạp",
  "in a relationship": "Đang hẹn hò",
};

function Introduce() {
  const { profile } = useProfile();
  const format = "DD/MM/YYYY";
  const relationshipStatus: string = profile?.info?.relationship || "single";

  return (
    <S.Wrapper>
      <Typography
        variant="body-text-small-bold"
        fontSize="18px"
        color="#fff !important"
      >
        Giới thiệu
      </Typography>
      <S.InfoContainer>
        <S.InfoItem>
          <HeartOutlined
            style={{ color: "#fff", fontSize: "16px", marginRight: "8px" }}
          />
          <Typography
            variant="body-text-small-normal"
            color="#fff !important"
            fontSize="14px"
          >
            {relationshipStatusMap[relationshipStatus]}
          </Typography>
        </S.InfoItem>
        {profile?.user?.sex && (
          <S.InfoItem>
            <WomanOutlined
              style={{ color: "#fff", fontSize: "16px", marginRight: "8px" }}
            />
            <Typography
              variant="body-text-small-normal"
              color="#fff !important"
              fontSize="14px"
            >
              {profile.user.sex}
            </Typography>
          </S.InfoItem>
        )}
        {profile?.user?.dateOfBirth && (
          <S.InfoItem>
            <CalendarOutlined
              style={{ color: "#fff", fontSize: "16px", marginRight: "8px" }}
            />
            <Typography
              variant="body-text-small-normal"
              color="#fff !important"
              fontSize="14px"
            >
              {moment(profile.user.dateOfBirth).format(format)}
            </Typography>
          </S.InfoItem>
        )}
        {profile?.info?.education && (
          <S.InfoItem>
            <BookOutlined
              style={{ color: "#fff", fontSize: "16px", marginRight: "8px" }}
            />
            <Typography
              variant="body-text-small-normal"
              color="#fff !important"
              fontSize="14px"
            >
              {profile.info.education}
            </Typography>
          </S.InfoItem>
        )}
      </S.InfoContainer>
    </S.Wrapper>
  );
}

export default Introduce;
