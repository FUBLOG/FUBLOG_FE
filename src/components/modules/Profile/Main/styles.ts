import styled from "styled-components";
import { Flex } from "antd";

export const HomeWrapper = styled(Flex)`
  &.theme-dark {
    background-color: #0c0c0c;
  }
  &.theme-light {
    background: rgb(236, 250, 215);
    background: linear-gradient(
      0deg,
      rgba(236, 250, 215, 1) 0%,
      rgba(255, 200, 200, 1) 45%,
      rgba(211, 213, 255, 1) 100%
    );
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
`;

export const Sidebar = styled(Flex)`
  &.theme-dark {
    -webkit-box-shadow: 0px 0px 18px 2px rgba(255, 238, 5, 0.65);
    -moz-box-shadow: 0px 0px 18px 2px rgba(255, 238, 5, 0.65);
    box-shadow: 0px 0px 18px 2px rgba(255, 238, 5, 0.65);
    border: 2px solid #f7d600;
  }
  &.theme-light {
    background-color: #faf0e6;
    border: 1px solid #352f44;
  }
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 0px 20px 20px 20px;
  gap: 20px;
  margin-left: 86px;
  margin-top: 120px;
  border-radius: 15px;
  height: 500px;
`;

export const Content = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 100%; /* Chỉnh chiều rộng của Content */
  padding: 20px;
  gap: 20px;
  margin-top: 80px;
  margin-right: 86px;
`;
