import { Flex, Modal } from "antd";
import styled from "styled-components";
export const PostWrapper = styled.div`
  box-sizing: border-box;

  margin: 20px 0;
  padding: 10px;
  max-width: 700px;
  width: 100%;

  border: 1.5px solid #ccc;
  border-radius: 30px;

  background-color: transparent;
`;

export const PostHeader = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled(Flex)`
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-weight: bold;
  margin-left: 10px;
  color: #b9b4c7;
`;

export const ContentWrapper = styled(Flex)`
  align-items: center;
  padding-left: 40px;
`;

export const Content = styled.p`
  color: #b9b4c7;
  margin: 0;
  padding: 10px 0px;
`;

export const ImagesWrapper = styled(Flex)`
  justify-content: center;
  gap: 10px;
  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;

export const PostFooter = styled(Flex)`
  justify-content: space-between;
  margin-top: 10px;
`;

export const TagWrapper = styled(Flex)`
  gap: 5px;
`;

export const Actions = styled(Flex)`
  gap: 10px;

  color: #b9b4c7;
  font-size: 16px;

  align-items: center;
  padding-left: 40px;
`;

export const Tag = styled.span`
  background-color: transparent;
  color: #b9b4c7;
  cursor: pointer;

  padding: 2px 8px;
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const CustomCard = styled(Flex)`
  flex-direction: column;
  gap: 10px;

  background-color: transparent;
  border: none;
  padding: 10px;
  border-radius: 10px;
`;

export const CustomModal = styled(Modal)`
  .ant-modal-content {
    background-color: #faf0e6 !important;
    padding: 20px 11px;
  }
  .ant-modal-header {
    background-color: #faf0e6;
  }

  .ant-modal-title {
    background-color: #faf0e6;
  }
  .ant-btn-primary {
    background-color: #5c5470 !important;
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
`;
