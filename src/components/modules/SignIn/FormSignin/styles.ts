import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  padding-bottom: 50px;

  flex-direction: column;
  gap: 10px;
  .ant-btn > span {
    color: #352f44 !important;
  }
`;
