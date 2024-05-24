import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  margin-top: 20px;
 
  
`;

export const PostContainer = styled.div`
  flex: 1;
  max-width: 800px;
  align-items: center;
  width: 100%; 
  max-width: 800px; 
  margin: 0 auto; 
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Tag = styled.span`
  background-color: transparent;
  border: 1px solid #B9B4C7;
  border-radius: 4px;
  padding: 2px 8px;
  color: #B9B4C7;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;
