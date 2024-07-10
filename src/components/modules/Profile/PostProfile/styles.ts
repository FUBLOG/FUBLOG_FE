import styled from "styled-components";
import { Flex, Modal, Menu } from "antd";

export const PostWrapper = styled.div`
  &.theme-dark {
    border: 1px solid #ccc;
  }
  &.theme-light {
    background-color: #faf0e6;
    border: 1px solid #352f44;
    box-shadow: 0px 0px 46px -18px rgba(53, 47, 68, 0.3);
    -webkit-box-shadow: 0px 0px 46px -18px rgba(53, 47, 68, 0.3);
    -moz-box-shadow: 0px 0px 46px -18px rgba(53, 47, 68, 0.3);
  }

  box-sizing: border-box;
  margin: 20px 0;
  padding: 24px;
  max-width: 700px;
  width: 100%;
  border-radius: 30px;
  background-color: transparent;
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
  .post-image {
    border-radius: 4px;
    width: 100%;
    height: 400px;
    margin: 0;
    cursor: pointer;
    object-fit: cover;
  }
  .image-modal {
    width: 100%;
    height: 350px;
  }
`;

export const PostHeader = styled(Flex)`
  align-items: center;
  gap: 2px;
  justify-content: space-between;
`;
export const PostHeaderModal = styled(Flex)`
  align-items: center;
  gap: 2px;
  justify-content: flex-start;
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

export const ModalContent = styled.span`
  color: #b9b4c7;
  font-size: 14px;
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

export const ImagesWrapper2 = styled.div`
  img {
    border-radius: 4px;
    max-width: 100%;
    height: 450px;
    margin: 0;
    cursor: pointer;
  }

  .ant-carousel .slick-prev,
  .ant-carousel .slick-next {
    color: black;
  }
  .ant-carousel .slick-prev::after,
  .ant-carousel .slick-next::after {
    width: 15px;
    height: 15px;
    top: -50px;
    border-inline-width: 4px 0;
    border-block-width: 4px 0;
    inset-inline-start: -1.342291px;
  }

  .ant-carousel .slick-dots li {
    margin-inline: 30px;
  }

  .ant-carousel .slick-dots li button {
    background-color: aqua;
    width: 50px;
  }

  .ant-carousel .slick-dots li.slick-active button {
    background-color: #000;
  }
  .post-image {
    object-fit: cover;
  }
`;

export const ImageModal = styled(Modal)`
  max-width: 100%;
  height: auto;
  .ant-layout-content {
    padding: 0 !important;
  }
`;

export const PostBody = styled.div`
  margin-top: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const PostModalHeader = styled(Flex)`
  align-items: center;
  gap: 10px;
  justify-content: start;
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-height: 100px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #faf0e6;
  overflow-y: auto;
  resize: none;
  box-sizing: border-box;
  &::placeholder {
    color: #5c5470;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const CommentUser = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
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
  .ant-modal-body {
    max-height: 70vh;
    overflow-y: auto;
    padding-bottom: 100px !important;
  }
  .ant-modal {
    top: 10%;
    transform: translateY(0%);
  }
`;

export const PostContentWrapper = styled.div`
  padding: 20px 20px 20px 60px;
  border-bottom: 1px solid #ccc;
`;

export const CommentSection = styled.div`
  padding: 10px;
`;

export const CommentsWrapper = styled.div`
  padding: 10px;
`;
export const CommentBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #faf0e6;
  padding: 10px;
  border-top: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;
`;

export const UserName = styled.span`
  font-weight: bold;
  margin-left: 10px;
  color: #352f44;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
`;
export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  width: 100%;
`;

export const CommentContent = styled.div`
  padding: 5px 0 5px 40px;
`;
