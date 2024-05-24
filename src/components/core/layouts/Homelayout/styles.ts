import styled from "styled-components";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 160px;
  font-size: 20px;
  color: ${(props) => props?.theme?.colors?.primary};
`;

export const Body = styled.div`
  padding-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;
export const GuestActions = styled.div`
  display: flex;
  gap: 15px;
  margin-right: 20px;
`;
