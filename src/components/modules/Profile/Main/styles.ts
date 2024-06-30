// Profile/styles.ts
import styled from "styled-components";
import { Flex } from "antd";

export const HomeWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  background-color: #352f44;
  width: 100%;
  gap: 32px;
  min-height: 100vh;
  span {
    color: #b9b4c7 !important;
  }
`;

export const Main = styled(Flex)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
  gap: 0px;
`;

export const Sidebar = styled(Flex)`
  flex-direction: column;
  width: 30%;
  background-color: #352f44;
  padding: 20px;
  gap: 20px;
  margin-left: 86px;
  margin-top: 20px;
`;

export const Content = styled(Flex)`
  flex-direction: column;
  width: 75%; /* Chỉnh chiều rộng của Content */
  background-color: #352f44;
  padding: 20px;
  margin-top: 84px;
`;
