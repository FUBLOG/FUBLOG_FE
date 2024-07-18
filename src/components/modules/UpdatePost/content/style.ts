import { Modal, Upload } from "antd";
import React from "react";
import styled from "styled-components";

export const ContentStyleDiv = styled.div`
  padding: 20px;
  position: relative;

  TextArea {
    margin: 10px;
    font-weight: 600;
  }

  TextArea::placeholder {
    color: #5c5469;
  }

  .contentHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 20px 0;
  }

  .user-wrapper {
    display: flex;
    align-items: center;

    span {
      font-weight: 700;
    }
  }

  .image-wrapper {
    margin-right: 10px;
    border: 2px solid white;
    border-radius: 50%; // Add border-radius here
    overflow: hidden; // Ensure the border-radius is applied correctly
    width: 40px; // Ensure the wrapper is the same size as the image
    height: 40px; // Ensure the wrapper is the same size as the image
  }

  .userAction button {
    background-color: #faf0e6 !important;
    border: none;
    width: 40px;
    height: 40px;
  }
  .userAction button * {
    width: 20px;
    height: 20px;
  }
  .userAction button:hover {
    background-color: rgba(92, 84, 112, 0.2) !important;
  }
  .create-btn {
    position: absolute;
    right: 20px;
    top: 450px;
  }
  .display-Tag {
    position: absolute;
    left: 20px;
    top: 450px;
  }
`;
export const CustomModal = styled(Modal)`
  .ant-modal-content {
    background-color: #faf0e6 !important;
    padding: 0;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
  .ant-modal-header {
    background-color: #faf0e6;
    border-bottom: none;
  }
  .ant-modal-title {
    color: #352f44;
    text-align: center;
    font-size: 22px !important;
  }
  .ant-btn-primary {
    background-color: #5c5470 ;
  }
  .ant-btn-primary:hover {
    background-color: #352f44 !important;
  }
  .ant-btn-default:hover {
    background: #faf0e6 !important;
    color: #352f44 !important;
    border-color: #352f44 !important;
  }
  .ant-btn-default {
    background: #faf0e6;
  }
  .ant-modal-body {
    max-height: 70vh;
    overflow-y: auto;
    padding-bottom: 50px ;
  }
  .ant-modal {
    top: 10%;
    transform: translateY(0%);
  }
`;
export const TagModal = styled(Modal)``;
export const AudienceModal = styled(Modal)``;
export const CustomUploadStyled = styled(Upload)``;
