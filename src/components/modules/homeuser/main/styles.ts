import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const PostContainer = styled.div`
  max-width: 800px;
  width: 100%;
  justify-content: center;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap:10px;
  margin-bottom:20px;
`;

export const Tag = styled.span`
  background-color: transparent;
  border: 1px solid #B9B4C7;
  border-radius: 4px;a
  padding: 2px 8px;
  color: #B9B4C7;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

