import styled from 'styled-components';
import { Flex } from 'antd';

export const HomeWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;
  width: 100%;
  height: 100vh;
`;

export const Message = styled(Flex)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled(Flex)`
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #1877f2;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
`;

export const HelpButton = styled.button`
  padding: 10px 20px;
  background-color: #42b72a;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
`;
