import React, { useState } from "react";
import { Input } from "antd";
import { PictureOutlined, SendOutlined } from "@ant-design/icons";

import { useSendMessage } from "@/hooks/useMessage";
import * as S from "../../styles";
import useConversation from "@/hooks/useConversation";
import { useAuthContext } from "@/contexts/AuthContext";
import { useSocketContext } from "@/contexts/SocketContext";
import useSidebarBadge from "@/hooks/useSidebarBadge";
import { getConversation } from "@/services/api/chat";

const InputMessage = () => {
  const [inputValue, setInputValue] = useState("");
  const { sendMessage } = useSendMessage();
  const [_, setClicked] = useState(false);
  const { setConversations, conversations, selectedConversation, setSelectedConversation } =
    useConversation();
  const { userInfo } = useAuthContext();
  const { socket } = useSocketContext();
  const { setMessageCount, messageCount } = useSidebarBadge();
  const handleSend = async (event: any) => {
    event.preventDefault();
    if (!inputValue) return;
    setClicked(true);
    await sendMessage(inputValue);
    if (selectedConversation?._id === 404) {
      const conversation = await getConversation(selectedConversation?.participants[0]?._id).then(
        (res: any) => res?.metadata
      );
      setSelectedConversation(conversation);
    }
    setInputValue("");
    // Đặt lại trạng thái clicked sau một khoảng thời gian (ví dụ: 300ms)
    setTimeout(() => setClicked(false), 300);
  };
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => { };
  const handleChange = (value: any) => {
    setInputValue(value);
    if (selectedConversation?.lastMessage?.senderId !== userInfo?._id && selectedConversation?.unReadCount > 0) {
      const newConversations = conversations.map((conversation) => {
        if (
          conversation?._id === selectedConversation?._id
        ) {
          return { ...conversation, unReadCount: 0 };
        }
        return conversation;
      });
      setConversations(newConversations);
      if (socket) {
        socket.emit("ping", selectedConversation._id);
        setMessageCount(messageCount - selectedConversation?.unReadCount)
        setSelectedConversation({ ...selectedConversation, unReadCount: 0 });
      }
    }
  }

  const handleFocus = () => {
    if (selectedConversation?.lastMessage?.senderId !== userInfo?._id && selectedConversation?.unReadCount > 0) {
      const newConversations = conversations.map((conversation) => {
        if (
          conversation?._id === selectedConversation?._id
        ) {
          return { ...conversation, unReadCount: 0 };
        }
        return conversation;
      });
      setConversations(newConversations);
      if (socket) {
        socket.emit("ping", selectedConversation._id);
        setMessageCount(messageCount - selectedConversation?.unReadCount)
        setSelectedConversation({ ...selectedConversation, unReadCount: 0 });
      }
    }
    };
    return (
      <S.MessageInputContainer>
        <S.InputWrapper>
          <Input.TextArea
            value={inputValue}
            onChange ={(e) => handleChange(e.target.value)}
            onPressEnter={handleSend}
            onFocus={handleFocus}
            placeholder="Nhập tin nhắn của bạn"
            autoSize={{ minRows: 1, maxRows: 6 }}
            style={{
              backgroundColor: "#FAF0E6",
              borderColor: "#5C5470",
              paddingRight: "50px",
            }}
          />
          <label htmlFor="upload" className="picture-upload">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              id="upload"
            />
            <PictureOutlined style={{ cursor: "pointer", color: "#8c8c8c" }} />
          </label>
        </S.InputWrapper>
        <SendOutlined
          onClick={handleSend}
          style={{ cursor: "pointer", marginLeft: 8 }}
        />
      </S.MessageInputContainer>
    );
  };

  export default InputMessage;
