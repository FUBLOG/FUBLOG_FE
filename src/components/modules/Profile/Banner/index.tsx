import React, { useEffect, useState } from "react";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";
import useFriend from "@/hooks/useFriend";
import { useGetProfile } from "@/hooks/useProfile";
import {
  acceptFriendRequest,
  rejectFriendRequest,
  sendFriendRequest,
  unfriend,
  unsentFriend,
} from "@/services/api/friend";
import ModalGuest from "../../ModalGuest";
import ButtonFriend from "../../ButtonFriend";
import NotFound from "../../NotFound/main";
import UpdateProfile from "../Update";
import UpdateProfileImages from "./UpdateProfileImages";
import useThemeStore from "@/hooks/useTheme";

const Banner = ({ profileHash, setLoading }: any) => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const {
    isFriend,
    isGuest,
    isMyUser,
    isRequester,
    isSendFriend,
    setIsFriend,
    setIsSendFriend,
    resetStatus,
    isNotFound,
    loading,
    checkFriend,
  } = useFriend(profileHash);
  const {
    MyUser,
    FriendButton,
    RequesterButton,
    SendFriendButton,
    GuestButton,
    DefaultButton,
  } = ButtonFriend();
  const [showModalGuest, setShowModalGuest] = useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [showUpdateImage, setShowUpdateImage] = useState(false);
  const [imageType, setImageType] = useState<"avatar" | "cover">("avatar");
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleCancel = () => {
    setShowModalGuest(false);
    setShowUpdateProfile(false);
    setShowUpdateImage(false);
    setShowImageModal(false);
    document.body.style.overflow = "auto";
  };

  const { profileSearch, getUserInfo } = useGetProfile(profileHash);

  const handleProfileUpdate = () => {
    getUserInfo(profileHash);
  };

  const handleDisplayButton = () => {
    if (isMyUser)
      return (
        <MyUser
          onClick={() => {
            setShowUpdateProfile(true);
            document.body.style.overflow = "hidden";
          }}
        />
      );
    if (isFriend) return <FriendButton handleFriend={handleFriend} />;
    if (isRequester) return <RequesterButton handleFriend={handleFriend} />;
    if (isSendFriend) return <SendFriendButton handleFriend={handleFriend} />;
    if (isGuest) return <GuestButton setShowModalGuest={setShowModalGuest} />;
    return <DefaultButton handleFriend={handleFriend} />;
  };

  const handleImageClick = (type: "avatar" | "cover") => {
    if (isMyUser) {
      setImageType(type);
      setShowUpdateImage(true);
      document.body.style.overflow = "hidden";
    } else {
      const imageUrl =
        type === "avatar"
          ? profileSearch?.info?.avatar
          : profileSearch?.info?.cover_photo;
      if (imageUrl) {
        setModalImageSrc(imageUrl);
        setShowImageModal(true);
        document.body.style.overflow = "hidden";
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    const updateInfor = async () => {
      await checkFriend();
      handleDisplayButton();
    };
    updateInfor();
    setLoading(false);
  }, [profileSearch, isFriend, isGuest, isMyUser, isRequester, isSendFriend]);

  const handleFriend = async (event: string): Promise<void> => {
    switch (event) {
      case "addFriend":
        await sendFriendRequest(profileSearch?.user?._id);
        resetStatus();
        setIsSendFriend(true);
        break;
      case "unfriend":
        await unfriend(profileSearch?.user?._id);
        resetStatus();
        setIsSendFriend(false);
        break;
      case "decline":
        await rejectFriendRequest(profileSearch?.user?._id);
        resetStatus();
        setIsSendFriend(false);
        break;
      case "accept":
        await acceptFriendRequest(profileSearch?.user?._id);
        resetStatus();
        setIsFriend(true);
        break;
      case "unsent":
        await unsentFriend(profileSearch?.user?._id);
        resetStatus();
        setIsFriend(false);
        break;
      default:
        break;
    }
    checkFriend();
  };

  const ImageModal = ({ src, onClose }: { src: string; onClose: () => void }) => (
    <S.ImageModalOverlay onClick={onClose}>
      <S.ImageModalContent>
        <img src={src} alt="Image Preview" />
      </S.ImageModalContent>
    </S.ImageModalOverlay>
  );

  return !isNotFound ? (
    <S.Wrapper>
      <ModalGuest showModalGuest={showModalGuest} handleCancel={handleCancel} />
      <UpdateProfile
        visible={showUpdateProfile}
        handleCancel={handleCancel}
        onProfileUpdate={handleProfileUpdate}
      />
      {isMyUser && (
        <UpdateProfileImages
          visible={showUpdateImage}
          handleCancel={handleCancel}
          imageType={imageType}
          onProfileUpdate={handleProfileUpdate}
        />
      )}
      {showImageModal && (
        <ImageModal
          src={modalImageSrc}
          onClose={() => {
            setShowImageModal(false);
            document.body.style.overflow = "auto";
          }}
        />
      )}
      <S.CoverImage
        src={profileSearch?.info?.cover_photo}
        onClick={() => handleImageClick("cover")}
      />
      <S.BannerUser>
        <S.BoxUser>
          <S.Avatar onClick={() => handleImageClick("avatar")}>
            <S.UserAvatar src={profileSearch?.info?.avatar} />
          </S.Avatar>
          <S.Typography>
            <Typography
              variant="body-text-small-bold"
              color={darkMode ? "#B9B4C7" : "#352F44"}
              fontSize="34px"
            >
              {profileSearch?.user?.displayName}
            </Typography>
            <Typography
              variant="body-text-small-normal"
              color={darkMode ? "#B9B4C7" : "#352F44"}
              fontSize="14px"
            >
              {profileSearch?.info?.bio}
            </Typography>
          </S.Typography>
        </S.BoxUser>
        <S.ButtonUser>{handleDisplayButton()}</S.ButtonUser>
      </S.BannerUser>
    </S.Wrapper>
  ) : (
    loading && (
      <S.Wrapper>
        <NotFound />
      </S.Wrapper>
    )
  );
};

export default Banner;
