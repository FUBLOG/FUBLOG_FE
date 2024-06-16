import styled from "styled-components";

// Định nghĩa kiểu dáng cho MessageInputContainer
export const MessageInputContainer = styled.div`
  padding: 8px 10px; /* Giảm padding */
  border-top: 1px solid #c5c5c5; /* Đường phân chia màu sắc rõ hơn */
  display: flex;
  align-items: center;
  background-color: #faf0e6;

  .ant-input-affix-wrapper {
    background-color: #fff; /* Màu nền trắng */
    border: 1px solid #5c5470;
    border-radius: 20px;
    padding: 0 15px; /* Giảm padding */
    height: 35px; /* Giảm chiều cao */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Bóng đổ nhẹ */
    font-size: 14px; /* Giảm kích thước font */
    transition: all 0.3s ease-in-out; /* Hiệu ứng mượt */
    &:focus {
      border-color: #5c5470;
      box-shadow: 0 0 5px rgba(92, 84, 112, 0.5);
    }
  }

  .ant-input::placeholder {
    color: #8c8c8c;
  }

  .anticon {
    color: #8c8c8c;
    cursor: pointer; /* Đổi con trỏ khi rê chuột */
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer; /* Đổi con trỏ khi rê chuột */
  }
`;

// Định nghĩa kiểu dáng cho MessageContent
interface MessageContentProps {
  isOwnMessage: boolean;
}

interface MessageItemProps {
  isOwnMessage: boolean;
}

export const MessageContent = styled.div<MessageContentProps>`
  background-color: ${(props) => (props.isOwnMessage ? "#d1eaff" : "#e0e0e0")};
  color: ${(props) => (props.isOwnMessage ? "#000" : "#333")};
  padding: 6px 10px;
  border-radius: 15px;
  border: 1px solid ${(props) => (props.isOwnMessage ? "#aad4ff" : "#c0c0c0")};
  max-width: 75%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 5px 0;
`;

export const MessageItem = styled.div<MessageItemProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  align-items: ${(props) => (props.isOwnMessage ? "flex-end" : "flex-start")};
`;

export const MessageTime = styled.div`
  color: #a3a3a3;
  font-size: 0.6rem;
  line-height: 0.75rem;
  margin-top: 2px;
  text-align: right;
  position: absolute;
  bottom: -15px;
  right: 0;
  font-style: italic;
`;

export const Sidebar = styled.div`
  width: 30%;
  height: 100%; /* Bao phủ toàn bộ chiều cao */
  background-color: #c5c5c5; /* Màu nền đồng nhất */
  border-right: 2px solid #b9b9b9;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5c5470;
    border-radius: 4px;
  }
`;

// Các định nghĩa khác
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
  padding: 20px 0;
  background-color: #c5c5c5; /* Phù hợp với nền của Sidebar */
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
  color: #333; /* Đảm bảo màu chữ phù hợp với nền */
`;

export const SearchBar = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px; /* Đảm bảo padding phù hợp */
  .ant-input-affix-wrapper {
    background-color: #fff;
    border: 1px solid #5c5470;
    border-radius: 20px;
    padding: 0 15px;
    height: 35px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    transition: all 0.3s ease-in-out;
    &:focus {
      border-color: #5c5470;
      box-shadow: 0 0 5px rgba(92, 84, 112, 0.5);
    }
  }
`;

export const FriendList = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
`;

export const FriendItem = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 5px 0;
  background-color: #e0e0e0;
  &:hover {
    background-color: #d1eaff;
  }
`;

export const FriendImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 1px solid #5c5470;
`;

export const FriendName = styled.div`
  font-size: 14px;
  margin-left: 8px;
  color: #333;
`;

export const ChatArea = styled.div`
  width: 70%;
  background-color: #faf0e6;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
  border-left: 2px solid #c5c5c5; /* Đường phân chia giữa phần chat và sidebar */
  ::-webkit-scrollbar {
    width: 5px; /* Độ rộng thanh cuộn */
    background-color: #d3d3d3; /* Màu nền của thanh cuộn */
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5c5470; /* Màu của thanh cuộn */
    border-radius: 5px; /* Bo tròn thanh cuộn */
  }
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

  .ant-badge-dot {
    bottom: 0px !important;
    inset-inline-start: 0 !important;
    top: auto !important;
    transform: translateX(30px) !important;
    width: 12px; /* Tăng kích thước dấu chấm */
    height: 12px; /* Tăng kích thước dấu chấm */
    box-shadow: 0 0 5px #5c5470; /* Hiệu ứng bóng đổ */
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
  padding: 10px 20px;
  background-color: #faf0e6;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #352f44;
  justify-content: flex-start;
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
`;

export const MessagesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #faf0e6;
  padding-bottom: 30px; /* Tạo khoảng cách cho thời gian */
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
