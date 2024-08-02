import { RequestHandler } from "express";
import { MessageService } from "../../services/messages/message.services";
import { IMessageCreate } from "../../common/interface/messages/message.interface";
import { Message } from "../../models/messages/message";

export class MessageController {
    private readonly messageService: MessageService = new MessageService()


    public getAllMessages: RequestHandler = async (req, res): Promise<void | Message[]> => {
        try {
            const messages = await this.messageService.getAllMessages()
            res.status(200).json(messages)
        } catch (error: any) {
            res.status(500).json({ message: [error?.message] })
        }

    }

    public createMessage: RequestHandler = async (req, res): Promise<any> => {
        try {
            const body: IMessageCreate = req.body
            const message = await this.messageService.createMessage(body)
            return res.status(200).json(message)
        } catch (error: any) {
            res.status(500).json({ message: [error?.message] })
        }
    }
}