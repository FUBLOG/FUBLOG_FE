import React, { useState } from "react";
import { Input } from "antd";
import { PictureOutlined, SendOutlined } from "@ant-design/icons";

import { useSendMessage } from "@/hooks/useMessage";
import * as S from "../../styles";

const InputMessage = () => {
  const [inputValue, setInputValue] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const [clicked, setClicked] = useState(false); 

  const handleSend = async (event: any) => {
    event.preventDefault();
    if (!inputValue) return;
    setClicked(true);
    await sendMessage(inputValue);
    setInputValue("");
     
      setTimeout(() => setClicked(false), 300);
};
const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

};
  return (
    <S.MessageInputContainer>
      <S.InputWrapper>
        <Input.TextArea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSend}
          placeholder="Nhập tin nhắn của bạn"
          autoSize={{ minRows: 1, maxRows: 6 }}
          style={{ backgroundColor: "#FAF0E6", borderColor: "#5C5470", paddingRight: "50px" }}
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
      <SendOutlined onClick={handleSend} style={{ cursor: "pointer", marginLeft: 8 }} />
    </S.MessageInputContainer>
  );
};

export default InputMessage;
