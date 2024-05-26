import Image from "next/image";
import avt from "@/public/profile/bia.jpg";
import * as S from "./styles";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";

export default function Banner() {
  return (
    <S.Wrapper>
      <S.CoverImage src={"/images/Profile/CoverPhoto.jpg"} />
      <S.BannerUser>
        <S.BoxUser>
          <S.Avatar>
            <S.UserAvatar src={""} />
          </S.Avatar>
          <S.Typography>
            <Typography variant="h2" color="#FAF0E6 !important">
              Jos Phan Ái
            </Typography>
            <Typography
              variant="caption-small"
              color="#FAF0E6 !important"
              fontSize="12px"
            >
              Tôi là một người ...
            </Typography>
          </S.Typography>
        </S.BoxUser>
        <S.ButtonUser>
          <Button
            type="default"
            children={"Bạn bè"}
            $width="100px"
            $backgroundColor="#FAF0E6"
          />
          <Button
            type="default"
            children={"Nhắn tin"}
            $backgroundColor="#FAF0E6"
            $width="100px"
            $hoverColor="#FAF0E6 !important"
          />
        </S.ButtonUser>
      </S.BannerUser>
    </S.Wrapper>
  );
}
