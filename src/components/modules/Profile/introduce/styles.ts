
import styled from "styled-components";
import { Flex } from "antd";

export const Wrapper = styled(Flex)`
  flex-direction: column;
  gap: 10px;
  width: 90%;
  margin-top: 50px;;
`;

export const InfoContainer = styled(Flex)`
  flex-direction: column;
  gap: 10px;
  background-color: #352f44;
  padding: 15px;
  border-radius: 18px;
  border: 1px solid #b9b4c7;
`;

export const InfoItem = styled(Flex)`
  flex-direction: column;
  gap: 5px;
  padding: 5px 0;
`;
