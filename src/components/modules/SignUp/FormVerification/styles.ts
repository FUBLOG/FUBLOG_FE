import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)<{ darkMode: boolean }>`
  padding-bottom: 50px;
  align-items: center;

  flex-direction: column;
  gap: 10px;
  .ant-btn > span {
    color: #352f44 ;
  }
  .ant-btn:hover > span {
    color: #faf0e6 ;
  }
  .ant-statistic-content-value {
    color: ${(props) => (props.darkMode ? "#F7D600" : "#000")} !important;
  }
`;

export const Typography = styled(Flex)`
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const Infor = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 10px;

  max-width: 360px;
  line-height: 1.5;
`;
