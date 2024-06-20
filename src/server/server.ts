import { Model, Response, createServer } from "miragejs";
import { Message } from "../types";

export default function () {
    return createServer({

        models: {
            message: Model
        },

        routes() {
            this.post("/api/chat", (schema, request) => {
                const requestBody = JSON.parse(request.requestBody);

                const query: Message = { content: requestBody.content, date: new Date().toISOString(), sender: 'USER' };
                
                // @ts-ignore
                schema.create('message', query);
                
                const reply: Message =  { content: 'yes', date: new Date().toISOString(), sender: 'BOT' };
                
                // @ts-ignore
                schema.create('message', reply);
                
                return new Response(200, {}, reply);
            });

            this.get('/api/chat', (schema, request) => {
                return new Response(200, {}, schema.all('message'));
            });
        }
        
    })
}