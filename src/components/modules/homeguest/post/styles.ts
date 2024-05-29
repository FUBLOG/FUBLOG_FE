import styled from "styled-components";

export const PostWrapper = styled.div`
  margin: 20px 0;
  padding: 10px;
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
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-weight: bold;
  color: #B9B4C7;
  margin-left: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;  
  padding-left: 40px;  
`;

export const Content = styled.p`
  color: #B9B4C7; 
  margin: 0;
  padding: 10px  0px;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center; 
  gap: 10px;
  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
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
   display: flex;
  align-items: center;  
  padding-left: 40px;  
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

export const CustomCard = styled.div`
  background-color: transparent;
  border: none;
  padding: 10px;
  border-radius: 10px;
`;

