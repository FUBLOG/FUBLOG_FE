
import styled from "styled-components";
import Typography from "@/components/core/common/Typography";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #FAF0E6;
  border-radius: 12px;
  width: 100%;
`;

export const FriendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px;
  width: 100%;
  padding: 10px 0;
`;

export const FriendCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f0e0d6;
  }
`;

export const FriendAvatar = styled.img`
  width: 40px; 
  height: 40px; 
  border-radius: 50%;
  margin-bottom: 5px;
`;

export const FriendName = styled(Typography)`
  color: #352f44;
  font-weight: bold;
  text-align: center;
`;

export const FriendCount = styled(Typography)`
  color: #b9b4c7;
  font-size: 12px;
  text-align: center;
  margin-top: 2px;
`;
