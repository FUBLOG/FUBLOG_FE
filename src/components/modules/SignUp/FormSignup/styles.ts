import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  padding-bottom: 50px;

  flex-direction: column;
  gap: 10px;

  .date {
    background-color: #352f44;
    color: #000;
    :hover {
      background-color: #352f44;
      color: #000;
    }
  }
  .ant-picker-dropdown .ant-picker-panel-container .ant-picker-panel-layout {
    background-color: #faf0e6;
  }

  .ant-picker-outlined:hover {
    color: #000;
    border: 1px solid #faf0e6;
  }
  .ant-picker-outlined {
    padding: 12px 16px;

    background-color: #fff;
    color: #000;
    border: 1px solid #faf0e6;
  }

  .ant-picker {
    width: 100%;
  }
  .ant-picker:focus {
    background-color: #000;
    color: #000;
    border: 1px solid #faf0e6;
  }
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 24px;
    color: #000;
  }
  .ant-picker-input {
    color: #000;
  }
.ant-picker-cell-inner:hover {
    background-color: #ffeb3b; /* Đổi '#ffeb3b' thành màu bạn mong muốn */
    color: #000 important; /* Đổi '#000' thành màu chữ bạn mong muốn khi hover */
  }
  .ant-picker-input > input::placeholder {
    color: #000 !important;
  }

  ::placeholder {
    color: #000;
  }
  .ant-btn > span {
    color: #000;
  }
  .ant-btn:hover > span {
    color: #faf0e6;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  input[data-autocompleted] {
    background-color: #faf0e6;
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
`;
export const Modal = styled(Flex)`
  gap: 30px;
  justify-content: center;
  flex-direction: column;
`;
