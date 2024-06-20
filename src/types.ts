export interface Message {
    content: string;
    date: string;
    sender: 'USER' | 'BOT';
}
