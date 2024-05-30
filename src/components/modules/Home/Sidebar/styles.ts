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
  gap: 10px;
  padding: 10px;

  margin-bottom: 10px;
`;

export const FriendImageContainer = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 0.5px solid #b9b4c7;

  overflow: hidden;
`;

export const FriendInfo = styled(Flex)`
  flex-direction: column;
  flex: 1;

  color: #b9b4c7;
  font-size: 14px;

  gap: 10px;
`;

export const FriendActions = styled(Flex)`
  gap: 15px;

  color: #b9b4c7;
  font-size: 22px;
  margin: 10px;
`;
