import styled from 'styled-components';
import { Flex } from 'antd';

export const HomeWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  height: 100vh;
`;

export const Message = styled(Flex)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 20px;
  background-color: #FAF0E6;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled(Flex)`
  flex-direction: row;
  gap: 16px;
  margin-top: 20px;
`;

export const BackButton = styled.button`
  padding: 12px 24px;
  background-color: #352F44;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 200px;;
`;

export const HelpButton = styled.button`
  padding: 12px 24px;
  background-color: #fff;
  border: none;
  color: #000;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 500px;
`;
