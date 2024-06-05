import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  background-color: #b9b4c7;
  width: 100%;
  span {
    color: #b9b4c7 !important;
  }
`;
