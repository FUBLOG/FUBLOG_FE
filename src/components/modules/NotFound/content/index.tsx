import React from 'react';
import * as S from './style';
import Typography from '@/components/core/common/Typography';
import Button from '@/components/core/common/Button';
import Link from 'next/link';
import { useAuthContext } from '@/contexts/AuthContext';

const NotFound: React.FC = () => {
  const { userInfo } = useAuthContext();

  return (
    <S.HomeWrapper>
      <S.Message>
        <Typography variant="h5" fontSize="24px">
          Trang này không hiển thị
        </Typography>
        <Typography variant="body-text-small-normal" fontSize="16px">
          Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không.
        </Typography>
        <S.ButtonContainer>
          <Link href={userInfo?._id ? "/" : "/sign-in"} passHref>
            <Button type="primary" $width="100px" $padding="30px" $fontSize="16px">
              Quay lại
            </Button>
          </Link>
        </S.ButtonContainer>
      </S.Message>
    </S.HomeWrapper>
  );
};

export default NotFound;
