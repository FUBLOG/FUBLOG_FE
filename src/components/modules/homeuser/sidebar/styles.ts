import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 260px;
  background-color: transparent;
  height: 100%;
  margin-right: 100px;
  margin-left:0px;
 
`;

export const SidebarTitle = styled.h2`
  color: #B9B4C7;
  margin-bottom: 20px;
`;

export const Friend = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const FriendImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #B9B4C7; /* Text color */
`;

export const FriendName = styled.span`
  font-weight: bold;
`;

export const FriendStatus = styled.span`
  font-size: 12px;
`;

export const FriendActions = styled.div`
  display: flex;
  gap: 10px;
  color: #B9B4C7;
  font-size: 16px;
`;
