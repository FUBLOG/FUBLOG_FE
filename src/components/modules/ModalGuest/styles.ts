import { Flex, Modal } from "antd";
import styled from "styled-components";

export const ModalWrap = styled(Modal)`
&.theme-dark {
  .ant-modal-content {
    background-color: #352f44 !important;
  }
}
  gap: 40px;
  justify-content: center;
  flex-direction: column;

`;
export const ModalContent = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
