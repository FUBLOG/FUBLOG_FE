import * as S from "../../styles";
import { Input } from "antd";
import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSendMessage } from "@/hooks/useMessage";
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
          // Đặt lại trạng thái clicked sau một khoảng thời gian (ví dụ: 300ms)
          setTimeout(() => setClicked(false), 300);
    };
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

    };
    return (<S.MessageInputContainer>
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
                    <SendOutlined
                            onClick={handleSend}
                            style={{
                                color: clicked ? "#FF6347" : "#000", // Thay đổi màu khi click
                                transition: "color 0.3s", // Thêm hiệu ứng chuyển đổi
                            }}
                        />
                </>
            }
        />
    </S.MessageInputContainer>);
}

export default InputMessage;