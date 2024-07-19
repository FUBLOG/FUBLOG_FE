import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 500px;
  max-height: 500px;
  background-color: #faf0e6;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
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
    margin-right: 20px;
    margin-left: -12px;

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
  border-bottom: 0.05px solid #b9b4c7;
  box-shadow: 0px 6px 6px -2px rgba(0, 0, 0, 0.1);
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

export const ChatFriendName = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-left: 8px;
`;

export const ActiveStatus = styled.div`
  font-size: 14px;
  color: #352f44;
  margin-left: auto;
  display: flex;
`;

export const MessageAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
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
  font-size: 20px;
  color: #352f44;
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
  max-height: 350px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
`;

export const Sidebar = styled.div`
  width: 30%;
  height: 100%;
  background-color: #faf0e6;
  border-right: 3px solid #b9b4c7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const FriendItem = styled.div<{ isSelected: boolean }>`
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-rows: auto auto;
  align-items: center;
  margin-right: 10px;
  padding: 4px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "#e5e5e5" : "transparent"};
  border-radius: 4px;
  grid-gap: 2px;
  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#e5e5e5" : "#d3cfe2"};
  }
  &:not(:hover) {
    background-color: ${({ isSelected }) =>
      isSelected ? "#e5e5e5" : "transparent"};
  }
`;

export const FriendName = styled.div`
  font-size: 16px;
  margin-left: 8px;

  line-height: 1.4;
  margin-bottom: 4px;
`;

export const LastMessage = styled.div`
  font-size: 12px;
  margin-left: 8px;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ActiveDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #52c41a;
  border-radius: 50%;
  margin-right: 5px;
  margin-top: 8px;
`;

export const MessagesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #faf0e6;
  height: 100%;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
`;

export const MessageItem = styled.div<{ isOwnMessage?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isOwnMessage }) =>
    isOwnMessage ? "flex-end" : "flex-start"};
  margin-bottom: 2px;
  width: 100%;
`;

export const MessageContent = styled.div<{ isOwnMessage?: boolean }>`
  background-color: ${({ isOwnMessage }) =>
    isOwnMessage ? "#1976D2" : "#B9B4C7"};
  color: ${({ isOwnMessage }) => (isOwnMessage ? "#FFFFFF" : "#")};
  border-radius: 12px;
  padding: 10px 16px;
  max-width: 70%;
  position: relative;
  margin-right: ${({ isOwnMessage }) => (isOwnMessage ? "0" : "auto")};
  margin-left: ${({ isOwnMessage }) => (isOwnMessage ? "auto" : "0")};

  &::before {
    content: "";
    position: absolute;

    width: 0;
    height: 0;

    ${({ isOwnMessage }) =>
      isOwnMessage
        ? `
    top: 26px;
    border: 7px solid transparent;
    border-left: 6px solid transparent;
    right: -2px; 
    border-left-color: #1976D2;
    border-right: 0;
     transform: rotate(-200deg);
    -ms-transform: rotate(-200deg); 
    -webkit-transform: rotate(-200deg); 
     

  `
        : `
    top: 26px;
    border: 10px solid transparent;
    border-right: 6px solid #5C5470;
    left: -2px; 
    border-right-color: #B9B4C7;
    border-left: 0;
     transform: rotate(-285deg);
    -ms-transform: rotate(-285deg); 
    -webkit-transform: rotate(-285deg); 
  `}
  }
`;

export const MessageTime = styled.time`
  font-size: 10px;
  opacity: 1.4;
  color: #b9b4c7;
  margin-left: 8px;
`;

export const ChatFooter = styled.div`
  font-size: 12px;

  color: #b9b4c7;
  margin-top: 4px;
`;

export const ChatHeader = styled.div<{ isOwnMessage?: boolean }>`
  font-size: 10px;

  display: flex;
  align-items: center;
  color: #352f44;
  margin-bottom: 0px;
  margin-left: 5px;
  margin-top: 5px;

  ${({ isOwnMessage }) =>
    isOwnMessage
      ? "justify-content: flex-end;"
      : "justify-content: flex-start;"}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -40px;

  .picture-upload {
    display: flex;
    align-items: center;
    color: #8c8c8c;
    margin-right: 8px;
  }
`;

export const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #e8e8e8;
  background-color: #faf0e6;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  .ant-input-textarea {
    padding-right: 40px;
  }

  .picture-upload {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #8c8c8c;
    display: flex;
    align-items: center;
  }
`;

export const NoChatSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

export const NoChatImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const IntroductionText = styled.div`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;
