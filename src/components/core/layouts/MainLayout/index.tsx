"use client";
import { useState, ReactNode } from "react";
import { Flex, Modal, Input } from "antd";
import Image from "next/image";
import {
  HomeOutlined,
  SearchOutlined,
  EditOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
  CaretDownOutlined, PictureOutlined,
  SendOutlined,CloseOutlined
} from "@ant-design/icons";
import Button from "../../common/Button";
import logo from "@/public/logo.png";
import * as S from "./styles";
interface MessageModalProps {
  visible: boolean;
  onClose: () => void;
}

const avatars: { [key: string]: string } = {
  "Jos Phan Ái": "/pam.png",
  "Vĩnh Trung": "/vinhtrung.png",
  "Văn Mạnh": "/Vanmanh.png",
  "Thu Phương": "/thuphuong.png",
  "Thanh Thủy": "/thanhthuy.png",
  "Minh Quân": "/minhquan.png",
};

const MessageModal: React.FC<MessageModalProps> = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Văn Mạnh", content: "Chán quá đi", type: "text" },
    { id: 2, sender: "Jos Phan Ái", content: "Muốn làm task không?", type: "text" },
    { id: 3, sender: "Văn Mạnh", content: "Không mệt lắm rồi!", type: "text" },
    { id: 4, sender: "Jos Phan Ái", content: "Vậy giờ muốn chi?", type: "text" },
    { id: 5, sender: "Văn Mạnh", content: "Muốn đi uống nước!", type: "text" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "Jos Phan Ái", content: inputValue, type: "text" },
      ]);
      setInputValue("");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "Jos Phan Ái", content: URL.createObjectURL(file), type: "image" },
      ]);
    }
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      bodyStyle={{ backgroundColor: "#FAF0E6", padding: 0 }}
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
            <S.FriendItem>
              <S.FriendImage src="/vinhtrung.png" alt="Vĩnh Trung" />
              <S.FriendName>Vĩnh Trung</S.FriendName>
            </S.FriendItem>
            <S.FriendItem>
              <S.FriendImage src="/Vanmanh.png" alt="Văn Mạnh" />
              <S.FriendName>Văn Mạnh</S.FriendName>
            </S.FriendItem>
            <S.FriendItem>
              <S.FriendImage src="/thuphuong.png" alt="Thu Phương" />
              <S.FriendName>Thu Phương</S.FriendName>
            </S.FriendItem>
            <S.FriendItem>
              <S.FriendImage src="/thanhthuy.png" alt="Thanh Thủy" />
              <S.FriendName>Thanh Thủy</S.FriendName>
            </S.FriendItem>
            <S.FriendItem>
              <S.FriendImage src="/minhquan.png" alt="Minh Quân" />
              <S.FriendName>Minh Quân</S.FriendName>
            </S.FriendItem>
          </S.FriendList>
        </S.Sidebar>
        <S.ChatArea>
          <S.ActiveFriends>
            <S.ActiveFriend>
              <S.ActiveFriendImage src="/thuphuong.png" alt="Thu Phương" isActive />
              <S.ActiveFriendName>Thu Phương</S.ActiveFriendName>
            </S.ActiveFriend>
            <S.ActiveFriend>
              <S.ActiveFriendImage src="/Vanmanh.png" alt="Văn Mạnh" isActive />
              <S.ActiveFriendName>Văn Mạnh</S.ActiveFriendName>
            </S.ActiveFriend>
            <S.ActiveFriend>
              <S.ActiveFriendImage src="/thanhthuy.png" alt="Thanh Thủy" />
              <S.ActiveFriendName>Thanh Thủy</S.ActiveFriendName>
            </S.ActiveFriend>
            <S.ActiveFriend>
              <S.ActiveFriendImage src="/vinhtrung.png" alt="Vĩnh Trung" />
              <S.ActiveFriendName>Vĩnh Trung</S.ActiveFriendName>
            </S.ActiveFriend>
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
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} id="upload" />
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

interface LayoutProps {
  readonly children: ReactNode;
  readonly isGuestPage?: boolean;
}
interface LayoutProps {
  readonly children: ReactNode;
  readonly isGuestPage?: boolean;
}

function MainLayout({ children, isGuestPage = true }: LayoutProps) {
  const [showMessageModal, setShowMessageModal] = useState(false); // Trạng thái modal nhắn tin

  const handleOpenMessageModal = () => {
    setShowMessageModal(true);
  };

  const handleCloseMessageModal = () => {
    setShowMessageModal(false);
  };

  return (
    <S.LayoutWrapper>
      <S.Header>
      <S.GlobalStyle /> 
        <S.Container>
          <Image src={logo} alt="logo header" />
          <S.IconContainer>
            <a href="/home">
              <HomeOutlined style={{ fontSize: "22px" }} />
            </a>
            <SearchOutlined style={{ fontSize: "22px" }} />
            <EditOutlined style={{ fontSize: "22px" }} />
            <MessageOutlined
              style={{ fontSize: "22px" }}
              onClick={handleOpenMessageModal} // Mở modal nhắn tin khi nhấn vào biểu tượng
            />
            <BellOutlined style={{ fontSize: "22px" }} />
          </S.IconContainer>
          {isGuestPage ? (
            <Flex gap={15} style={{ marginRight: "20px" }}>
              <a href="/sign-in">
                <Button type="default" $width="100px">
                  Đăng nhập
                </Button>
              </a>
              <a href="/sign-up">
                <Button color="red" type="primary" $width="100px">
                  Đăng ký
                </Button>
              </a>
            </Flex>
          ) : (
            <S.UserIconContainer>
              <a href="/profile">
                <UserOutlined style={{ fontSize: "28px" }} />
              </a>
              <CaretDownOutlined
                style={{ fontSize: "18px", marginLeft: "4px" }}
              />
            </S.UserIconContainer>
          )}
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
      <MessageModal
        visible={showMessageModal}
        onClose={handleCloseMessageModal}
      />
    </S.LayoutWrapper>
  );
}

export default MainLayout;
