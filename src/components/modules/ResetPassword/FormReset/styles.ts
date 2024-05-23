import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  padding-bottom: 50px;

  flex-direction: column;
  gap: 50px;

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
    border: 1px solid #faf0e6 !important;
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
`;
export const Typography = styled(Flex)`
  gap: 5px;
  justify-content: center;
`;
