import { FC } from "react";
import { Message } from "../../types";

interface ChatMessageProps {
    message: Message;
}

const ChatMessage: FC<ChatMessageProps> = (props) => {
    const { message } = props;

    return (
        <div className="chat-message" data-testid="chat-message">
            <div>{message.sender}</div>
            <div>{message.date}</div>
            <div>{message.content}</div>
        </div>
    );
};

export default ChatMessage;
