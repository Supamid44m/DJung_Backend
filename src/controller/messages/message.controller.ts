import { RequestHandler } from "express";
import { MessageService } from "../../services/messages/message.services";
import { ILikeUnLikeMessage, IMessageCreate, IMessageResponse } from "../../common/interface/messages/message.interface";
import { Message } from "../../models/messages/message";

export class MessageController {
  private readonly messageService: MessageService = new MessageService();


  public getMessageByid:RequestHandler =async(req,res): Promise<void | IMessageResponse[]> =>{
    try{
      const id : string  = req.params?.id
      const message = await this.messageService.getMessageById(id)
      res.status(200).json(message);
    }catch(error: any){
      res.status(500).json({ message: [error?.message] });
    }
  } 

  public getAllMessages: RequestHandler = async (
    req,
    res
  ): Promise<void | IMessageResponse[]> => {
    try {
      const messages = await this.messageService.getAllMessages();
      res.status(200).json(messages);
    } catch (error: any) {
      res.status(500).json({ message: [error?.message] });
    }
  };

  public createMessage: RequestHandler = async (req, res): Promise<any> => {
    try {
      const body: IMessageCreate = req.body;
      const message = await this.messageService.createMessage(body);
      return res.status(200).json(message);
    } catch (error: any) {
      res.status(500).json({ message: [error?.message] });
    }
  };

  public likeMessage: RequestHandler = async (req, res) => {
    try {
      const body: ILikeUnLikeMessage = req.body
      const userId = body.userId
      const messageId = parseInt(req.params?.id, 10)
      const respone = await this.messageService.likeMessage(userId, messageId)
      return res.status(200).json(respone);
    } catch (error: any) {
      res.status(500).json({ message: [error?.message] })
    }
  };

  public unlikeMessage: RequestHandler = async (req, res) => {
    try{
      const body: ILikeUnLikeMessage = req.body
      const userId = body.userId
      const messageId = parseInt(req.params?.id, 10)
      const respone = await this.messageService.unlikeMessage(userId, messageId)
      return res.status(200).json(respone);
    }catch(error:any){
      res.status(500).json({ message: [error?.message] })
    }
  }

}
