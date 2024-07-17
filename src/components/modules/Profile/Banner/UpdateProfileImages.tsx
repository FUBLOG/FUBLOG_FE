import React, { useState, useEffect } from "react";
import { Upload, message, Modal } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadFile, UploadProps } from "antd/lib/upload/interface";
import { patchRequest } from "@/services/request";
import { profileEndpoint } from "@/services/endpoint";
import * as S from "./updateStyle";

interface UpdateProfileImagesProps {
  visible: boolean;
  handleCancel: () => void;
  imageType: "avatar" | "cover";
  onProfileUpdate: () => void;
}

const UpdateProfileImages: React.FC<UpdateProfileImagesProps> = ({
  visible,
  handleCancel,
  imageType,
  onProfileUpdate,
}) => {
  const [avatarFileList, setAvatarFileList] = useState<UploadFile[]>([]);
  const [coverFileList, setCoverFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (!visible) {
      setAvatarFileList([]);
      setCoverFileList([]);
    }
  }, [visible]);

  const handleChange: UploadProps['onChange'] = ({ fileList }) => {
    if (imageType === "avatar") {
      setAvatarFileList(fileList as UploadFile[]);
    } else {
      setCoverFileList(fileList as UploadFile[]);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    const fileList = imageType === "avatar" ? avatarFileList : coverFileList;

    if (fileList[0]?.originFileObj) {
      formData.append("image", fileList[0].originFileObj);
      // console.log("File được thêm vào FormData:", fileList[0].originFileObj);

      // console.log("FormData trước khi gửi:");
     
    } else {
      console.error("Không có file nào trong danh sách hoặc file không hợp lệ.");
      message.error("Không có file nào được chọn.");
      return;
    }

    try {
      const endpoint = imageType === "avatar" ? profileEndpoint.CHANGE_AVATAR : profileEndpoint.CHANGE_COVER;
      await patchRequest(endpoint, { data: formData, security: true }, true);
      message.success(`Cập nhật ảnh ${imageType === "avatar" ? "đại diện" : "bìa"} thành công`);
      
      handleCancel();
      onProfileUpdate();
    } catch (error) {
      console.error(`Lỗi khi cập nhật ảnh ${imageType === "avatar" ? "đại diện" : "bìa"}:`, error);
      message.error(`Cập nhật ảnh ${imageType === "avatar" ? "đại diện" : "bìa"} thất bại`);
    }
  };

  const handlePreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as Blob);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const imgWindow = window.open(src);
    imgWindow?.document.write(`<img src="${src}" />`);
  };

  return (
    <S.StyledModal
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      centered
      title={`Cập nhật ${imageType === "avatar" ? "ảnh đại diện" : "ảnh bìa"}`}
    >
      <S.UploadContainer className={imageType === "avatar" ? "modal-custom1" : "modal-custom"}>
        <ImgCrop modalTitle={`Chỉnh sửa ${imageType === "avatar" ? "ảnh đại diện" : "ảnh bìa"}`} rotationSlider>
          {imageType === "avatar" ? (
            <S.AvatarUpload
              listType="picture-card"
              fileList={avatarFileList}
              onChange={handleChange}
              onPreview={handlePreview}
              beforeUpload={() => false}
            >
              {avatarFileList.length < 1 && "+ Upload"}
            </S.AvatarUpload>
          ) : (
            <S.CoverUpload
              listType="picture-card"
              fileList={coverFileList}
              onChange={handleChange}
              onPreview={handlePreview}
              beforeUpload={() => false}
            >
              {coverFileList.length < 1 && "+ Upload"}
            </S.CoverUpload>
          )}
        </ImgCrop>
        <S.CustomButton
          type="primary"
          
          onClick={handleUpload}
          disabled={imageType === "avatar" ? avatarFileList.length === 0 : coverFileList.length === 0}
        >
          Cập nhật
        </S.CustomButton>
      </S.UploadContainer>
    </S.StyledModal>
  );
};

export default UpdateProfileImages;
