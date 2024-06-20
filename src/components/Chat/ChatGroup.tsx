import { FC } from "react";
import { Message } from "../../types";
import ChatMessage from "./ChatMessage";

interface ChatGroupProps {
    messages: Message[];
}

const ChatGroup: FC<ChatGroupProps> = (props) => {
    const { messages } = props;

    return (
        <div className="chat-group">
            {messages.map((message) => (
                <ChatMessage message={message} />
            ))}
        </div>
    );
};

export default ChatGroup;
