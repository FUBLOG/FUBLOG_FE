import styled from "styled-components";

export const LayoutWrapper = styled.main`
  &.theme-dark {
    background-color: #0c0c0c;
  }
  &.theme-light {
    background: rgb(236, 250, 215);
    background: linear-gradient(
      0deg,
      rgba(236, 250, 215, 1) 0%,
      rgba(255, 200, 200, 1) 45%,
      rgba(211, 213, 255, 1) 100%
    );
  }
  min-height: 100vh;
`;

export const Header = styled.header`
  &.theme-dark {
    -webkit-box-shadow: 0px 0px 10px 1px rgba(255, 238, 5, 0.65);
    -moz-box-shadow: 0px 0px 10px 1px rgba(255, 238, 5, 0.65);
    box-shadow: 0px 0px 10px 1px rgba(255, 238, 5, 0.65);
  }

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const Container = styled.div`
  margin: 4px 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 190px;
  height: 40px;
`;

export const InputWrap = styled.div`
  width: 400px;
`;

export const Body = styled.div`
  padding-top: 80px;
`;
