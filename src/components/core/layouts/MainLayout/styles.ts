import { Flex, Modal } from "antd";
import { Flex, Modal } from "antd";
import styled, { createGlobalStyle } from "styled-components";

export const LayoutWrapper = styled.main`
  background-color: ${(props) => props?.theme?.colors?.backgroundGray};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GlobalStyle = createGlobalStyle`
  .ant-modal-content {
    background-color: #faf0e6 !important;
  .ant-modal-title {
    background-color: #faf0e6 !important;
  }
  `;
export const Header = styled.header`
  background-color: ${(props) => props?.theme?.colors?.backgroundWhite};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  z-index: 1000;
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
export const SearchModal = styled(Modal).attrs({ className: "searchModal" })`
  &.searchModal {
    position: relative;
    right: 140px;
    background-color: transparent;
  }

  &.searchModal .ant-modal-content {
    width: 800px;
    height: 540px;
export const SearchModal = styled(Modal).attrs({ className: "searchModal" })`
  &.searchModal {
    position: relative;
    right: 140px;
    background-color: transparent;
  }

  &.searchModal .ant-modal-content {
    width: 800px;
    height: 540px;
    background-color: #faf0e6 !important;
  }
  &.searchModal .ant-modal-header {
    background-color: transparent;
  }
  &.searchModal .ant-modal-title {
    // color: #f9f9f9;
  }
  &.searchModal .ant-modal-body {
    padding: 15px;
  }
  &.searchModal .ant-input {
    padding-left: 35px;

    margin-top: 15px;
    height: 50px;
    color: rgb(92, 84, 112);
    background-color: #faf0e6;
    border-radius: 50px;
    border-color: rgb(92, 84, 112);
  }
  &.searchModal .ant-input::placeholder {
    opacity: 1;
    color: rgb(92, 84, 112);
  }

  &.searchModal .ant-modal-close {
    background-color: #faf0e6;
  }
  &.searchModal .ant-modal-close-x {
    width: 20px;
    height: 20px;
    transform: translate(30%, 0px);
  }
`;
export const CreateModal = styled(Modal).attrs({ className: "createModal" })`
  &.createModal {
    position: relative;
    right: 140px;
    background-color: transparent;
  }
  &.createModal .ant-modal-content {
    height: 540px;
    width: 800px;
    background-color: #faf0e6 !important;
    border-radius: 10px;
  }

`;
