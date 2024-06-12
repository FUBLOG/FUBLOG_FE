import React, { useState, useEffect, useRef } from "react";
import { Modal, Input, Badge } from "antd";
import { SearchOutlined, PictureOutlined, SendOutlined, CloseOutlined } from "@ant-design/icons";
import * as S from "./styles";

interface PageProps {
  readonly visible: boolean;
  readonly onClose: () => void;
}
const user = [
  {
    id: 1,
    name: "Jos Phan Ái",
    avatar: "/pam.png",
    action: true,
  },
  {
    id: 2,
    name: "Vĩnh Trung",
    avatar: "/vinhtrung.png",
    action: true,
  },
  {
    id: 3,
    name: "Văn Mạnh",
    avatar: "/Vanmanh.png",
    action: false,
  },
  {
    id: 4,
    name: "Thu Phương",
    avatar: "/thuphuong.png",
    action: true,
  },
  {
    id: 5,
    name: "Thanh Thủy",
    avatar: "/thanhthuy.png",
    action: false,
  },
];

const avatars: { [key: string]: string } = {
  "Jos Phan Ái": "/pam.png",
  "Vĩnh Trung": "/vinhtrung.png",
  "Văn Mạnh": "/Vanmanh.png",
  "Thu Phương": "/thuphuong.png",
  "Thanh Thủy": "/thanhthuy.png",
  "Minh Quân": "/minhquan.png",
};

const Chat = ({ visible, onClose }: PageProps) => {
  const [selectedId, setSelectedId] = useState(3);
  const [messages, setMessages] = useState([
    { id: 1, sender: "Văn Mạnh", content: "Chán quá đi", type: "text" },
    { id: 2, sender: "Jos Phan Ái", content: "Muốn làm task không?", type: "text" },
    { id: 3, sender: "Văn Mạnh", content: "Không mệt lắm rồi!", type: "text" },
    { id: 4, sender: "Jos Phan Ái", content: "Vậy giờ muốn chi?", type: "text" },
    { id: 5, sender: "Văn Mạnh", content: "Muốn đi uống nước!", type: "text" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "Jos Phan Ái",
          content: inputValue,
          type: "text",
        },
      ]);
      setInputValue("");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "Jos Phan Ái",
          content: URL.createObjectURL(file),
          type: "image",
        },
      ]);
    }
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      styles={{ body: { backgroundColor: "#FAF0E6", padding: 0 } }}
      closable={false}
    >
      <S.ModalContainer>
        <S.CloseButton onClick={onClose}>
          <CloseOutlined />
        </S.CloseButton>
        <S.Sidebar>
          <S.Profile>
            <S.ProfileImage src="/jos.jpg" alt="Profile" />
            <S.ProfileName>Jos Phan Ái</S.ProfileName>
          </S.Profile>
          <S.SearchBar>
            <Input
              placeholder="Tìm kiếm"
              prefix={<SearchOutlined />}
              style={{ backgroundColor: "#FAF0E6", borderColor: "#5C5470" }}
            />
          </S.SearchBar>
          <S.FriendList>
            {user.map((user) => (
              <S.FriendItem
                key={user.id}
                onClick={() => {
                  setSelectedId(user.id);
                }}
                style={{
                  backgroundColor: selectedId === user.id ? "#b9b4c7" : "transparent",
                  borderRadius: selectedId === user.id ? "20px 0px 0px 20px" : "none",
                }}
              >
                <S.FriendImage src={user.avatar} alt={user.name} />
                <S.FriendName>{user.name}</S.FriendName>
              </S.FriendItem>
            ))}
          </S.FriendList>
        </S.Sidebar>
        <S.ChatArea>
          <S.ActiveFriends>
            {user.map((user) => (
              <S.ActiveFriend key={user.id}>
                <Badge dot={user.action} status="success">
                  <S.ActiveFriendImage src={user.avatar} alt={user.avatar} isActive />
                </Badge>
                <S.ActiveFriendName>{user.name}</S.ActiveFriendName>
              </S.ActiveFriend>
            ))}
          </S.ActiveFriends>

          <S.ChatContainer>
            <S.ChatHeader>
              <S.FriendImage src="/Vanmanh.png" alt="Văn Mạnh" />
              <S.ChatFriendName>Văn Mạnh</S.ChatFriendName>
              <S.ActiveStatus>Đang hoạt động</S.ActiveStatus>
            </S.ChatHeader>
            <S.MessagesList>
              {messages.map((message) => (
                <S.MessageItem key={message.id} isOwnMessage={message.sender === "Jos Phan Ái"}>
                  {message.sender !== "Jos Phan Ái" && (
                    <S.MessageAvatar src={avatars[message.sender]} alt={message.sender} />
                  )}
                  {message.type === "text" ? (
                    <S.MessageContent>{message.content}</S.MessageContent>
                  ) : (
                    <S.MessageContent>
                      <img src={message.content} alt="Uploaded" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                    </S.MessageContent>
                  )}
                </S.MessageItem>
              ))}
              <div ref={messagesEndRef} />
            </S.MessagesList>
            <S.MessageInputContainer>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPressEnter={handleSend}
                placeholder="Nhập tin nhắn của bạn"
                style={{ backgroundColor: "#FAF0E6", borderColor: "#5C5470" }}
                suffix={
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                      id="upload"
                    />
                    <label htmlFor="upload">
                      <PictureOutlined style={{ marginRight: 8 }} />
                    </label>
                    <SendOutlined onClick={handleSend} />
                  </>
                }
              />
            </S.MessageInputContainer>
          </S.ChatContainer>
        </S.ChatArea>
      </S.ModalContainer>
    </Modal>
  );
};

export default Chat;
