import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  flex-direction: row;
  justify-content: space-around;
  background-color: #352f44;
  height: 100vh;
  span {
    color: #b9b4c7 !important;
  }
`;
export const Container = styled(Flex)`
  width: 100%;
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const Main = styled(Flex)`
  width: 74%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
