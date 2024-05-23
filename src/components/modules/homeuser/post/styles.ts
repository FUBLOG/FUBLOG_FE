import styled from "styled-components";

export const PostWrapper = styled.div`
  margin: 20px 0;
  padding: 0px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-weight: bold;
  color: #B9B4C7; /* Đổi màu chữ */
`;

export const Content = styled.p`
  color: #B9B4C7; 
  font-size:18px
`;

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 10px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  color: #B9B4C7;
  font-size: 16px;
`;

export const Tag = styled.span`
  background-color: transparent; /* Make the button transparent */
  border: 1px solid #B9B4C7; /* Border color */
  border-radius: 4px;
  padding: 2px 8px;
  color: #B9B4C7; /* Text color */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
