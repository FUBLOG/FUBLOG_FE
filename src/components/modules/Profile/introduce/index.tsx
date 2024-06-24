
"use client";

import React from "react";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";

function Introduce() {

  const profileSearch = {
    info: {
      maritalStatus: "Độc thân",
      job: "Lập trình viên",
      location: "Hà Nội",
    },
  };

  return (
    <S.Wrapper>
      <Typography variant="caption-normal" color="#FAF0E6 !important">
        Giới thiệu
      </Typography>
      <S.InfoContainer>
        <S.InfoItem>
          <Typography
            variant="caption-small"
            color="#FAF0E6 !important"
            fontSize="12px"
          >
            Tình trạng hôn nhân: {profileSearch.info.maritalStatus}
          </Typography>
        </S.InfoItem>
        <S.InfoItem>
          <Typography
            variant="caption-small"
            color="#FAF0E6 !important"
            fontSize="12px"
          >
            Công việc: {profileSearch.info.job}
          </Typography>
        </S.InfoItem>
        <S.InfoItem>
          <Typography
            variant="caption-small"
            color="#FAF0E6 !important"
            fontSize="12px"
          >
            Sống tại: {profileSearch.info.location}
          </Typography>
        </S.InfoItem>
      </S.InfoContainer>
    </S.Wrapper>
  );
}

export default Introduce;
