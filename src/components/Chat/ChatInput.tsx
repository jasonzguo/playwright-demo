import { FC, FormEventHandler } from "react";

interface ChatInputProps {
    onSubmit: FormEventHandler<HTMLFormElement>;
}

const ChatInput: FC<ChatInputProps> = (props) => {
    const { onSubmit } = props;

    return (
        <div className="chat-input" data-testid="chat-input-form">
            <form onSubmit={onSubmit}>
                <input data-testid="chat-input" autoComplete="off" name="content"></input>
            </form>
        </div>
    );
};

export default ChatInput;
