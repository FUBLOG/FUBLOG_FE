"use client";

import React from "react";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";
import { HeartOutlined, WomanOutlined, CalendarOutlined, BookOutlined } from '@ant-design/icons';

function Introduce() {

  const profileSearch = {
    info: {
      relation: "Độc thân",
      sex: "Nữ",
      dateOfBirth: "19-02-2004",
      education: "Đại học FPT"
    },
  };

  return (
    <S.Wrapper>
      <Typography variant="body-text-small-bold" fontSize="18px" color="#fff !important">
        Giới thiệu
      </Typography>
      <S.InfoContainer>
        <S.InfoItem>
          <HeartOutlined style={{ color: '#fff', fontSize: '16px', marginRight: '8px' }} />
          <Typography
            variant="body-text-small-normal"
            color="#fff !important"
            fontSize="14px"
          >
            {profileSearch.info.relation}
          </Typography>
        </S.InfoItem>
        <S.InfoItem>
          <WomanOutlined style={{ color: '#fff', fontSize: '16px', marginRight: '8px' }} />
          <Typography
            variant="body-text-small-normal"
            color="#fff !important"
            fontSize="14px"
          >
            {profileSearch.info.sex}
          </Typography>
        </S.InfoItem>
        <S.InfoItem>
          <CalendarOutlined style={{ color: '#fff', fontSize: '16px', marginRight: '8px' }} />
          <Typography
            variant="body-text-small-normal"
            color="#fff !important"
            fontSize="14px"
          >
            {profileSearch.info.dateOfBirth}
          </Typography>
        </S.InfoItem>
        <S.InfoItem>
          <BookOutlined style={{ color: '#fff', fontSize: '16px', marginRight: '8px' }} />
          <Typography
            variant="body-text-small-normal"
            color="#fff !important"
            fontSize="14px"
          >
            {profileSearch.info.education}
          </Typography>
        </S.InfoItem>
      </S.InfoContainer>
    </S.Wrapper>
  );
}

export default Introduce;
