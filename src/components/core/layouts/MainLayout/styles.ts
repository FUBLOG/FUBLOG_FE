
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
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  max-width: 180px; 
  max-height: 60px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 0 120px;  
  gap: 60px;
`;

export const ActionsContainer = styled.div`


  
`;

export const UserIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;  
`;

export const GuestActions = styled.div`
  display: flex;
  gap: 15px;
`;

export const Body = styled.div`
  padding-top: 30px; 
  width: 100%;
  display: flex;
justify-content: center;
  flex: 1;
`;
export const Container = styled.div`
  margin: 4px 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
