import styled from "styled-components";
import { Modal, Upload, Button } from "antd";

export const StyledModal = styled(Modal)`
  .ant-modal {
    width: 100%;
    max-width: 1000px;
    max-height: 1000px;
    margin: 0 auto;
  }
  .ant-modal-content {
    width: 100%;
    margin: 0 auto;
    max-width: 1000px;
  }
  .ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
  }
  .ant-upload-list-item-container {
    height: 350px;
    width: 700px;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &.modal-custom {
    .ant-upload {
      width: 450px !important;
      height: 250px !important;
    }
    .ant-upload-list-item-container {
      width: 450px !important;
      height: 250px !important;
    }
    .ant-upload-list-item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ant-upload-list-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &.modal-custom1 {
    .ant-upload {
      width: 300px !important;
      height: 300px !important;
    }
    .ant-upload-list-item-container {
      width: 300px !important;
      height: 300px !important;
    }
    .ant-upload-list-item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ant-upload-list-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const AvatarUpload = styled(Upload)`
  .ant-upload.ant-upload-select-picture-card {
    width: 300px !important;
    height: 300px !important;
  }
`;

export const CoverUpload = styled(Upload)`
  .ant-upload.ant-upload-select-picture-card {
    width: 700px !important;
    height: 350px !important;
  }
`;

export const CustomButton = styled(Button)`
  font-size: 20px !important;
  padding: 20px 30px!important;
  margin-top: 20px;
`;
