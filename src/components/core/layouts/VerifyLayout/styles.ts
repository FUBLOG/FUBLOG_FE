import styled from "styled-components";

export const LayoutWrapper = styled.main`
  background-color: ${(props) => props?.theme?.colors?.backgroundWhite};
  min-height: 100vh;
  display: flex;
  justify-content: center;
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

export const Body = styled.div`
  padding-top: 80px;
`;
