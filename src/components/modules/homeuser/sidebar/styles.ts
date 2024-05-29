import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 240px;
  background-color: transparent;
  height: 100%;
 
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  margin-top:100px;
  margin-left:20px;
 
  
`;

export const SidebarTitle = styled.h2`
  color: #b9b4c7;
  margin-bottom: 20px;
`;

export const Friend = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;

  margin-bottom: 10px;
`;

export const FriendImageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 0.5px solid #b9b4c7;
 
`;

export const FriendImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #b9b4c7;
  font-size:14px;
`;

export const FriendName = styled.span`
  font-weight: bold;
`;

export const FriendStatus = styled.span`
  font-size: 12px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const FriendActions = styled.div`
  display: flex;
  gap: 15px;
  color: #b9b4c7;
  font-size: 22px;
  margin:10px;
`;
