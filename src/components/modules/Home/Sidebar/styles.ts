import { Flex } from "antd";
import styled from "styled-components";
export const SidebarWrapper = styled.div`
  width: 250px;
  background-color: transparent;

  position: absolute;
  top: 10%;
  left: 0;

  margin-left: 10px;
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
  grid-template-columns: 40px auto;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e8e8e8;
  }
`;

export const FriendImageContainer = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 0.5px solid #b9b4c7;

  overflow: hidden;

`;

export const FriendInfo = styled(Flex)`
  flex-direction: column;
  flex: 1;

  color: #b9b4c7;
  font-size: 16px;

  gap: 10px;

  align-item:center;
  
`;

