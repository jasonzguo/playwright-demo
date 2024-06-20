import { FC, FormEventHandler, useEffect, useState } from "react";
import ChatGroup from "./ChatGroup";
import ChatInput from "./ChatInput";
import { Message } from "../../types";

import "./Chat.css";

const Chat: FC = () => {

    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const getMessages = async () => {
            const resp = await fetch('/api/chat');
            const data = await resp.json();
            setMessages(data.messages);
        };
        debugger;
        getMessages();
    }, []);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const content = formData.get('content')?.toString();

        const createMessage = async (content: string) => {
            let newMessages: Message[] = [
                ...messages,
                { content, date: (new Date()).toISOString(), sender: 'USER' }
            ];

            setMessages(newMessages);

            const resp = await fetch('/api/chat', {
                method: 'POST',
                body: JSON.stringify({ content })
            });
            const data: Message = await resp.json();

            newMessages = [
                ...newMessages,
                data
            ];

            setMessages(newMessages);
        };

        if (content) {
            createMessage(content);
        }
    };

    return (
        <div className="chat">
            <ChatGroup messages={messages} />
            <ChatInput onSubmit={handleSubmit} />
        </div>
    );
}

export default Chat;
