import styled from "styled-components";

export const PostWrapper = styled.div`
  margin: 20px 0;
  padding: 0px;
  background-color: transparent;
  border: 1.5px solid #ccc;
  border-radius: 30px;
  max-width: 700px;
  width: 100%; 
  box-sizing: border-box; 
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
  font-size: 18px;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center; /* Căn giữa các hình ảnh */
  gap: 10px;
  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto; /* Căn giữa hình ảnh */
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
  background-color: transparent; 
  padding: 2px 8px;
  color: #B9B4C7; 
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
