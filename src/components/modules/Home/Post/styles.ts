import { Flex, Modal } from "antd";
import styled from "styled-components";

export const PostWrapper = styled.div`
  box-sizing: border-box;
  margin: 20px 0;
  padding: 24px;cccc
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
  color: #352f44;
  font-size: 18px;
`;

export const ContentWrapper = styled(Flex)`
  align-items: center;
  padding-left: 40px;
`;

export const PostContent = styled.p`
  color: #b9b4c7;
  font-size: 14px;
  line-height: 2;
  margin: 0;
  padding: 10px 0;
 
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

  ::-webkit-scrollbar {
    width: 5px; 
  }
`;

export const CommentBox = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  align-items: flex-start;
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-height: 150px; 
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #faf0e6;
  overflow-y: auto; 
  resize: none; 
  box-sizing: border-box; 
  &::placeholder {
    color: #5c5470;
  }c
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