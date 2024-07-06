import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  padding-bottom: 50px;

  flex-direction: column;
  gap: 10px;

  .date {
    background-color: #352f44;
    color: #b9b4c7;
    :hover {
      background-color: #352f44;
    }
  }
  .ant-picker-dropdown .ant-picker-panel-container .ant-picker-panel-layout {
    background-color: #faf0e6 !important;
  }

  .ant-picker-outlined:hover {
    background-color: #352f44;
    color: #b9b4c7;
    border: 1px solid #faf0e6;
  }
  .ant-picker-outlined {
    padding: 12px 16px;

    background-color: #352f44 !important;
    color: #b9b4c7 !important;
    border: 1px solid #faf0e6;
  }

  .ant-picker {
    width: 100%;
  }
  .ant-picker:focus {
    background-color: #352f44;
    color: #b9b4c7;
    border: 1px solid #faf0e6;
  }
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 24px;
  }
  .ant-picker-input {
    color: #b9b4c7 !important;
  }
  .ant-picker-input-placeholder > input {
    color: #b9b4c7 !important;
  }

  ::placeholder {
    color: #b9b4c7 !important;
  }
  .ant-btn > span {
    color: #352f44 !important;
  }
  .ant-btn:hover > span {
    color: #faf0e6 !important;
  }
`;
export const TitleLogin = styled(Flex)`
    margin-bottom : 50px;
      justify-content: center;
  align-items: center;
  gap: 10px;
`
export const Typography = styled(Flex)`
  gap: 5px;
  justify-content: center;
`;
export const Modal = styled(Flex)`
  gap: 30px;
  justify-content: center;
  flex-direction: column;
`;
