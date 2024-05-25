import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  padding-bottom: 50px;

  flex-direction: column;
  gap: 10px;
  .ant-btn > span {
    color: #352f44 !important;
  }
  .ant-btn:hover > span {
    color: #faf0e6 !important;
  }
`;

export const Typography = styled(Flex)`
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const Label = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;
