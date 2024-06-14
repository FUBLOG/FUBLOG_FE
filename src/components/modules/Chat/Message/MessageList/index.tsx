import { useGetMessage } from "@/hooks/useMessage";
import * as S from "../../styles";
import { useRef } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { useListenMessage } from "@/hooks/useListen";
const MessageList = () => {
    const { messages } = useGetMessage();
    const { userInfo } = useAuthContext();
    useListenMessage();
    const messagesEndRef = useRef<HTMLDivElement>(null);
    return (
        <S.MessagesList>
            {messages.map((message) => (
                <S.MessageItem key={message?._id} isOwnMessage={message.senderId === userInfo?._id}>
                    <S.MessageContent>{message.message}</S.MessageContent>

                    {/* <S.MessageContent>
                            <img src={message.content} alt="Uploaded" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                        </S.MessageContent> */}

                </S.MessageItem>
            ))}
            <div ref={messagesEndRef} />
        </S.MessagesList>
    );
}

export default MessageList;