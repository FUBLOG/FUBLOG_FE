import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;

  background-color: #352f44;
  height: 100vh;

  span {
    color: #b9b4c7 !important;
  }
`;
export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 100px 70px;
  box-sizing: border-box;
`;
export const Main = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 74%;
  box-sizing: border-box;
`;
