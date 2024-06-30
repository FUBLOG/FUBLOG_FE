import styled from 'styled-components';
import { Flex } from 'antd';

export const HomeWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  background-color: #352f44;
  width: 100%;
  gap: 32px;
  min-height: 100vh;
  span {
    color: #b9b4c7 !important;
  }
`;
