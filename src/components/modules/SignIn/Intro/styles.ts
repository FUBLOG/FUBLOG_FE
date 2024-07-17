import { Flex } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled(Flex)`
  .overlay {
    overflow: hidden;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      transparent,
      rgba(0, 0, 0, 0)
    );
    pointer-events: none;
    z-index: 10000;
  }
`;
