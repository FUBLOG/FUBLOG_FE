// Profile/TotalFriend/styles.ts
import styled from "styled-components";
import Typography from "@/components/core/common/Typography";
import { Modal } from "antd";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #FAF0E6;
  border-radius: 30px;
  width: 100%;
  height: 450px;
`;

export const FriendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr); 
  width: 100%;
  padding: 10px 0;
  border-radius: 1px solid #ccc;
`;

export const FriendCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f0e0d6;
    border-radius: 10px;
  }
  justify-content: center;
`;

export const FriendImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FriendName = styled(Typography)`
  color: #352f44;
  font-weight: bold;
`;

export const FriendCount = styled(Typography)`
  color: #b9b4c7;
  font-size: 13px;
`;

export const CustomModal = styled(Modal)`

.ant-modal-content {
  border-radius: 24px;

}
`
