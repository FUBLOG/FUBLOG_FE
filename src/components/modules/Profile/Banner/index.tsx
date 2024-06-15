import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import * as S from "./styles";
import useFriend from "@/hooks/useFriend";
import { useEffect, useState } from "react";
import { useProfileContext } from "@/contexts/ProfileContext";

export default function Banner({
  profileHash,
}: {
  readonly profileHash: string;
}) {
  const { isFriend, isBlocked, isGuest, isMyUser, sendFriend } = useFriend();
  const [loading, setLoading] = useState(true);
  const { profileInfo } = useProfileContext();
  useEffect(() => {
    setLoading(false);
  }, [profileHash]);
  const handleAddFriend = () => {
    sendFriend(profileInfo?.user?._id);
  };
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
              {profileHash}
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
          {isGuest ? (
            <></>
          ) : isFriend && !isMyUser ? (
            <>
              <Button
                type="default"
                children={"Bạn bè"}
                $width="100px"
                $backgroundColor="#FAF0E6"
                loading={loading}
                color="#352f44"
                $hoverColor="#faf0e6"
              />
              <Button
                type="default"
                children={"Nhắn tin"}
                $backgroundColor="#FAF0E6"
                $width="100px"
                loading={loading}
                color="#352f44"
                $hoverColor="#faf0e6"
              />
            </>
          ) : isMyUser ? (
            <Button
              type="default"
              loading={loading}
              children={"Chỉnh sửa"}
              $width="100px"
              $backgroundColor="#FAF0E6"
              color="#352f44"
              $hoverColor="#faf0e6"
            />
          ) : (
            <Button
              type="default"
              children={"Thêm bạn bè"}
              loading={loading}
              onClick={() => {
                handleAddFriend();
              }}
              // loading
              $width="120px"
              $backgroundColor="#FAF0E6"
              color="#352f44"
              $hoverColor="#faf0e6"
            />
          )}
        </S.ButtonUser>
      </S.BannerUser>
    </S.Wrapper>
  );
}
