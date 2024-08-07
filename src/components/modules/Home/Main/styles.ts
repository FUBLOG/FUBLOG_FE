import { Flex } from "antd";
import styled from "styled-components";


export const HomeWrapper = styled(Flex)`
  padding-top: 20px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const MainWrapper = styled(Flex)`
  margin-top: 40px;
`;

export const ContentWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const PostContainer = styled.div`

  max-width: 800px;
  width: 100%;
  &.theme-light{
    .custom-spin .ant-spin-dot{
      color: blue; 
  }
  }
  &.theme-dark{
    .custom-spin .ant-spin-dot{
      color: #F7D600; 
  }
  }
`;

export const TagsContainer = styled(Flex)`
  justify-content: center;
  margin-bottom: 20px;

  gap: 10px;

  color:#fff !important
  
`;

export const Tag = styled.span`
  background-color: transparent;
  color: #b9b4c7;

  border: 1px solid #b9b4c7;
  border-radius: 4px;

  padding: 2px 8px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;
