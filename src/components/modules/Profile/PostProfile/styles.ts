// Profile/PostProfile/styles.ts
import styled from "styled-components";
import { Flex, Modal,Menu } from "antd";

export const PostWrapper = styled.div`
  box-sizing: border-box;
  margin: 24px 0;
  padding: 24px;
  max-width: 620px;
  width: 100%;
  border: 1.5px solid #fff;
  border-radius: 30px;
  background-color: transparent;
  margin-top:42px;
`;

export const ContentWrapper = styled(Flex)`
  align-items: flex-start;
  padding: 0 20px;
`;

export const PostContent = styled.p`
  color: #b9b4c7;
  font-size: 14px;
  line-height: 2;
  margin: 0;
  padding: 10px 0;
`;

export const ImagesWrapper = styled(Flex)`
  justify-content: flex-start;
  padding: 0 20px;
  gap: 10px;
  flex-wrap: wrap;
  gap: 8px;
  
  img {
    border-radius: 4px;
    max-width: 100%;
    height: auto;
    margin: 0;
  }

  &.images-1 .post-image {
    flex: 1 1 100%;
    width: 100%;
    
  }

  &.images-2 .post-image {
    flex: 1 1 49%;
    width: 40%;
  }

  &.images-3 .post-image {
    flex: 1 1 28%;
    width: 25%;
  }

  &.images-4 .post-image,
  &.images-5 .post-image,
  &.images-6 .post-image {
    flex: 1 1 23%;
    width: 23%;
    
  }

  .post-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .more-images {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 16px;
  }
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
  color: #352f44;
  font-size: 18px;
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

export const TagContent = styled.span`
  color: #b9b4c7;
  font-size: 14px;
  line-height: 2;
`;

export const CustomCard = styled(Flex)`
  flex-direction: column;
  gap: 5px;
  background-color: transparent;
  border: none;
  padding: 0px;
  border-radius: 30px;
`;

export const CustomModal = styled(Modal)`
border-radius: 20px;
  .ant-modal-content {
    background-color: #faf0e6 !important;
    padding: 0px 0px;
    border-radius: 50px;
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

export const ModalContent = styled.span`
  color: #b9b4c7;
  font-size: 14px;
`;

export const CommentSection = styled(Flex)`
  flex-direction: column;
  gap: 0px;
  margin-top: 5px;
  background-color: #faf0e6;
`;

export const CommentsWrapper = styled(Flex)`
  flex-direction: column;
  gap: 5px;
  max-height: 220px;
  overflow-y: auto;
  padding: 10px;
`;

export const CommentBox = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  align-items: flex-start;
`;

export const TextArea = styled.textarea`
  width: 95%;
  max-height: 150px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #fff !important;
  overflow-y: auto;
  resize: none;
  box-sizing: border-box;
  &::placeholder {
    color: #5c5470;
  }
`;

export const Comment = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;
  padding: 10px;
  gap: 5px;
`;

export const CommentHeader = styled(Flex)`
  align-items: center;
  gap: 10px;
`;

export const CommentUser = styled.span`
  font-weight: bold;
  color: #352f44;
  font-size: 14px;
`;

export const CommentContent = styled.span`
  color: #352f44;
  font-size: 14px;
  margin-left: 40px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
`;

export const Stroke = styled.div`
  width: 2px;
  height: 30px;
  background-color: #ccc;
  margin-right: 15px;
  display: inline-block;
  margin-left: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomMenu = styled(Menu)`
  background-color: #faf0e6 !important;
`;

export const CustomMenuItem = styled(Menu.Item)`
  background-color: #faf0e6 !important;
  color: #352f44 !important;

  &:hover {
    background-color: #e5d6c6 !important;
    color: #352f44 !important;
  }

  &:active {
    background-color: #d4b8a9 !important;
  }
`;

export const ReplyBox = styled(Flex)`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #faf0e6;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-top: 5px;
`;
