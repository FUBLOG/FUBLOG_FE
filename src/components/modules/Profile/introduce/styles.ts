import styled from "styled-components";
import { Flex } from "antd";

export const Wrapper = styled(Flex)`
  flex-direction: column;
  gap: 10px;
  width: 90%;
  margin-top: 50px;
`;

export const InfoContainer = styled(Flex)`
  &.theme-dark{
  background-color: #352f44;
  }
  &.theme-light{
  background-color: transparent;
  box-shadow: 0px 0px 46px -18px rgba(53,47,68,0.3);
-webkit-box-shadow: 0px 0px 46px -18px rgba(53,47,68,0.3);
-moz-box-shadow: 0px 0px 46px -18px rgba(53,47,68,0.3);

  }
  flex-direction: column;
  
  gap: 10px;
  padding: 15px;
  border-radius: 18px;
  border: 1px solid #b9b4c7;
`;

export const InfoItem = styled(Flex)`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 5px 0;
`;
