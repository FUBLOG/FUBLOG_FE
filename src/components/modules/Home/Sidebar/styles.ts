import styled from "styled-components";
import Typography from "@/components/core/common/Typography";

export const SidebarWrapper = styled.div`
  width: 250px;
  background-color: transparent;
  position: absolute;
  top: 10%;
  left: 0;
  margin-left: 10px;
`;

export const SidebarTitle = styled(Typography)`
  color: #B9B4C7;
`;

export const FriendContainer = styled.div`
  height: calc(100% - 100px);
  overflow-y: auto;
  max-height: 400px;
`;

export const Friend = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 50px auto; 
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, font-weight 0.3s; 
  &:hover {
    background-color: #faf0e6;
    color: #5C5470;
    font-weight: bold;
  }
`;

export const FriendImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid #b9b4c7;
  overflow: hidden;
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #5C5470;
  font-size: 16px;
  gap: 10px;
 margin-left:20px;
  transition: color 0.3s, font-weight 0.3s; 
`;

export const FriendName = styled(Typography)`
  color: #B9B4C7; 
  font-weight: normal;
  transition: color 0.3s, font-weight 0.3s; 

  ${Friend}:hover & {
    color: #5C5470;
    font-weight: bold;
  }
`;

export const FriendDetails = styled(Typography)`
  color: #B9B4C7; 
  font-size: 12px;
  transition: color 0.3s, font-weight 0.3s; 
  ${Friend}:hover & {
    color: #5C5470;
    font-weight: bold;
  }
`;