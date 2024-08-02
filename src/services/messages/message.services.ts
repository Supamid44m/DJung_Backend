import { IMessage, IMessageCreate } from "../../common/interface/messages/message.interface";
import { Message } from "../../models/messages/message";

export class MessageService {
    private db = Message;

    public async getAllMessages():Promise<Message[]>{
        const messages = await this.db.findAll()
        return messages
    }


    public async createMessage(body:IMessageCreate):Promise<any>{
        const message = await this.db.create(body)
        return message
    }
}