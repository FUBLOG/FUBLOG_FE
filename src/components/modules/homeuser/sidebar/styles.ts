import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 260px;
  background-color: transparent;
  height: 100%;
  margin-right: 100px;
  margin-left: 0px;
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
  
  margin-bottom: 10px;
`;

export const FriendImageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden; /* Đảm bảo hình ảnh không tràn ra ngoài khung tròn */
  border: 0.5px solid #B9B4C7; /* Thêm viền xung quanh hình ảnh */
`;

export const FriendImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Đảm bảo hình ảnh được cắt đúng */
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
  gap:15px;
  color: #B9B4C7;
  font-size: 22px;
`;
