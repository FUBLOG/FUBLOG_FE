import React from 'react';
import * as S from'./style'
import Typography from '@/components/core/common/Typography';

const NotFound: React.FC = () => {
  return (
    <S.HomeWrapper>
      <S.Message>
        <Typography variant="body-text-small-bold" fontSize="24px">
          Bạn hiện không xem được nội dung này
        </Typography>
        <Typography variant="body-text-small-normal" fontSize="16px">
          Lỗi này thường do chủ sở hữu chỉ chia sẻ nội dung với một nhóm nhỏ, thay đổi người được xem hoặc đã xóa nội dung.
        </Typography>
        <S.ButtonContainer>
          <S.BackButton>Đi tới Bảng tin</S.BackButton>
          <S.HelpButton>Truy cập Trung tâm trợ giúp</S.HelpButton>
        </S.ButtonContainer>
      </S.Message>
    </S.HomeWrapper>
  );
};

export default NotFound;
