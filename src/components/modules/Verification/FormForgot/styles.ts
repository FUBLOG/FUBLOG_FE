import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  padding-bottom: 50px;
  align-items: center;

  flex-direction: column;
  gap: 10px;
  .ant-btn > span {
    color: #352f44 !important;
  }
  .ant-btn:hover > span {
    color: #faf0e6 !important;
  }
`;
export const TitleLogin = styled(Flex)`
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Typography = styled(Flex)`
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const Infor = styled(Flex)`
  flex-direction: column;
  align-items: center;

  max-width: 300px;
  line-height: 1.5;
`;
