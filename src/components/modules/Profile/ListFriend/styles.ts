
import styled from "styled-components";
import { Flex } from "antd";
import Typography from "@/components/core/common/Typography";

export const Wrapper = styled(Flex)`
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Title = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const ViewAllButton = styled.div`
 cursor: pointer;
  color: #b9b4c7; 
  
  &:hover {
    text-decoration: underline;
    text-decoration-color: #b9b4c7; 
  }
`;

export const FriendContainer = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;  
  padding: 5px;
  background-color: transparent;
  width:300px;
`;

export const Friend = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 80px; 
`;

export const FriendImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

export const FriendName = styled(Typography)`
  color: #faf0e6;
  font-weight: normal;
  text-align: center;
  font-size: 12px; 
`;
