import { Flex } from "antd";
import styled, { createGlobalStyle } from "styled-components";

export const LayoutWrapper = styled.main`
  background-color: ${(props) => props?.theme?.colors?.backgroundGray};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  background-color: ${(props) => props?.theme?.colors?.backgroundWhite};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 180px;
  max-height: 60px;
`;

export const IconContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  gap: 120px;
`;

export const UserIconContainer = styled(Flex)`
  align-items: center;
  gap: 4px;
  margin-left: 200px;
`;

export const GuestActions = styled(Flex)`
  gap: 15px;
`;

export const Body = styled(Flex)`
  padding-top: 30px;
  width: 100%;

  flex: 1;
`;

export const Container = styled(Flex)`
  margin: 4px 18px;
  justify-content: space-between;
  align-items: center;
`;
export const GlobalStyle = createGlobalStyle`
  .ant-modal-content {
    background-color: #faf0e6 !important;
  }
`;
