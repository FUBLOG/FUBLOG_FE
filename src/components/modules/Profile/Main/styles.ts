// Profile/styles.ts
import styled from "styled-components";
import { Flex } from "antd";

export const HomeWrapper = styled(Flex)`
  &.theme-dark{
  background-color: #352f44;

  }
    &.theme-light{
  background-color: #FAF0E6;

  }
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const Main = styled(Flex)`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  gap: 0px;
`;

export const Container = styled(Flex)`

  gap: 32px;

  width: 100%;
  max-width: 1200px;

`

export const Sidebar = styled(Flex)`

  flex-direction: column;
  width: 30%;
  padding: 20px;
  gap: 20px;
  margin-left:86px;
  margin-top: 100px;
  border-radius: 15px;
`;

export const Content = styled(Flex)`

  flex-direction: column;
  width: 100%; /* Chỉnh chiều rộng của Content */
  padding: 20px;
  gap: 20px;
  margin-top: 50px;
  margin-right:86px;
`;
