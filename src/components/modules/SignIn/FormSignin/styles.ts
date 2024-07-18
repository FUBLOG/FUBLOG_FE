import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  padding-bottom: 50px;

  flex-direction: column;
  gap: 10px;
  .ant-btn > span {
    color: #000 !important;
  }
  .ant-btn:hover > span {
    color: #faf0e6 !important;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  input[data-autocompleted] {
    background-color: #fff !important;
  }
`;

export const TitleLogin = styled(Flex)`
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
