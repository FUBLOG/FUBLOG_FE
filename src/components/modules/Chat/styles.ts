import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 500px;
  max-height: 500px;
  background-color: #faf0e6;
  ::-webkit-scrollbar {
    width: 0px !important;
    height: 0px !important;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const ProfileName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const SearchBar = styled.div`
  width: 95%; 
  margin-bottom: 20px;
  .ant-input-affix-wrapper {
    background-color: #faf0e6;
    border: 1px solid #c0c0c0; 
  margin-right:20px;
  margin-left:-12px;
  
    padding: 1px 1px; 

  }
  .ant-input-affix-wrapper:hover {
    border-color: #a0a0a0; 
  }
  .ant-input {
    border-radius: 15px; 
  }
  .ant-input:focus {
    box-shadow: none; 
  }
`;

export const FriendImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 1px solid #5c5470;
  grid-row: span 2; 
`;

export const ChatArea = styled.div`
  width: 70%;
  background-color: #faf0e6;
  display: flex;
  flex-direction: column;
`;

export const ActiveFriends = styled.div`
  overflow-x: auto;

  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8e8;
`;


export const ActiveFriend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  position: relative; 

  .ant-badge-dot {
    width: 16px !important; 
    height: 16px !important; 
    border-radius: 50%; 
    background-color: #52c41a !important;
    border: 2px solid #faf0e6 !important; 
    box-shadow: 0 0 0 1px #faf0e6; 
     bottom: 0px !important;
    inset-inline-start: 0 !important;
    top: auto !important;
    transform: translateX(30px) !important;
  }
`;

export const ActiveFriendImage = styled(FriendImage)<{ isActive?: boolean }>``;

export const ActiveFriendName = styled.div`
  width: max-content;
  font-size: 12px;
  text-align: center;
  color: #352f44;
`;

export const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #352f44;
  justify-content: flex-start;
`;

export const ChatFriendName = styled.div`
  font-weight:bold;
  font-size: 16px;
  margin-left: 8px;
`;

export const ActiveStatus = styled.div`
  font-size: 14px;
  color: #352f44;
  margin-left: auto;
  display:flex;
`;

export const MessagesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

export const MessageAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

export const MessageInputContainer = styled.div`
  padding: 10sspx;
  border-top: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  background-color: #faf0e6;

  .ant-input-affix-wrapper {
    background-color: #faf0e6;
    border: 1px solid #5c5470;
    border-radius: 4px;
    margin-left:8px;
  }

  .ant-input::placeholder {
    color: #8c8c8c;
  }

  .anticon {
    color: #8c8c8c;
  }
`;

export const NoChatSelected = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #352f44;
`;

export const NoChatSelectedText = styled.div`
  font-size: 24px;
  color: #352f44;
`;

export const MessageTime = styled.div`
  color: #352f44;
  opacity: 0.4;
  font-size: 10px;
  line-height: 14px;
`;

const StyledIcon = styled.div`
  font-size: 22px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #b9b4c7;
  }

  &.active {
    color: #b9b4c7;
  }
`;

export const FriendList = styled.div`
  flex: 1;
  width: 100%; 
  height: 100%; 
  overflow-y: scroll; 
  padding: 0; 
  margin: 0;
  position: relative;


  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4); 
    border-radius: 4px; 
    cursor: pointer; 
  }

  
  ::-webkit-scrollbar-track {
    background-color: #f0e4d7; /
  }


  scrollbar-color: rgba(0, 0, 0, 0.4) #c7c8cc; 
  scrollbar-width: thin;

  &:hover {
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.6); 
    }
  }
`;

export const Sidebar = styled.div`
  width: 30%;
  height: 100%;
  background-color: #faf0e6;
  border-right: 3px solid #dcdcdc; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0; 
`;

export const MessageItem = styled.div<{ isOwnMessage: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isOwnMessage }) => (isOwnMessage ? 'flex-end' : 'flex-start')};
  margin-bottom: 10px;
`;

export const MessageContent = styled.div<{ isOwnMessage: boolean }>`
  max-width: 80%;
  background-color: ${({ isOwnMessage }) => (isOwnMessage ? '#b9b4c7' : '#d3cfe2')};  
  color: #352f44;
  padding: 4px;
  border-radius: ${({ isOwnMessage }) => (isOwnMessage ? '5px 0px 5px 5px' : '0px 5px 5px 5px')}; 
`;

export const FriendItem = styled.div<{ isSelected: boolean }>`
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-rows: auto auto;
  align-items: center;
  margin-right:10px;
  padding: 4px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#e5e5e5" : "transparent")}; 
  border-radius: 4px;
  grid-gap: 2px;
  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "#e5e5e5" : "#d3cfe2")}; 
  
  &:not(:hover) {
    background-color: ${({ isSelected }) => (isSelected ? "#e5e5e5" : "transparent")};
  }
`;

export const FriendName = styled.div`
  font-size:16px;
  margin-left:8px;
 
  line-height: 1.4; 
  margin-bottom: 4px; 
`;

export const LastMessage = styled.div`
  font-size:12px;
  margin-left:10px
  color: #888; 
  white-space: nowrap;
  pverflow:hidden
  text-overflow: ellipsis; 
`;
export const ActiveDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #52c41a; 
  border-radius: 50%;
  margin-right: 5px; 
  margin-top:8px;
  
`;