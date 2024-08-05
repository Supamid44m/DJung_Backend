import { MessagesException } from "../../common/constants/messages/messages.exception";
import {
  ILikeMessage,
  IMessage,
  IMessageCreate,
  IMessageResponse,
} from "../../common/interface/messages/message.interface";
import { User } from "../../models/auth/user";
import { Message } from "../../models/messages/message";
import { MessageUserLikedRelationShip } from "../../models/messages/messageUser";
import { isNullOrUndefined } from "../../utils/object.utils";

export class MessageService {
  private messageDb = Message;
  private messageUserRelationShip = MessageUserLikedRelationShip;
  private userDb = User;

  public async getAllMessages(): Promise<IMessageResponse[]> {
    const messages = await this.messageDb.findAll({});
    const messageRespone = await this.fullfillMessageResponse(messages);
    return messageRespone;
  }

  public async createMessage(body: IMessageCreate): Promise<Message> {
    const message = await this.messageDb.create(body);
    return message;
  }

  private async fullfillMessageResponse(
    messages: Message[]
  ): Promise<Message[]> {
    for (let message of messages) {
      const isAnonymouseCreate = this.checkIsAnonymousCreate(message);

      if (isAnonymouseCreate) {
        message.createdBy = null;
        message.createdById = null;
      }
      await this.fullfillMessageUserLiked(message);
    }
    return messages;
  }

  private checkIsAnonymousCreate(message: Message) {
    return message.isAnonymous ? true : false;
  }

  private async fullfillMessageUserLiked(
    message: Message
  ): Promise<void | Message> {
    const userLikedArray: Array<User> = [];
    const messageId = message.id;
    const messageUserLiked = await this.messageUserRelationShip.findAll({
      where: { messageId: messageId },
    });
    const userIds = messageUserLiked.map((item) => item.userId);
    for (const id of userIds) {
      const userLiked = await this.userDb.findOne({ where: { id } });
      if (userLiked) {
        userLikedArray.push(userLiked);
      }
    }
    message.setDataValue('likedBy', userLikedArray);
  }

  public async likeMessage(userId: number, messageId: number): Promise<{ message: string[] }> {

    const user = await this.userDb.findOne({ where: { id: userId } })
    const message = await this.messageDb.findOne({ where: { id: messageId } })

    if (!user) {
      throw new Error(MessagesException.UserNotFound)
    }

    if (!message) {
      throw new Error(MessagesException.MessageNotFound)
    }

    const isUserAlreadyLiked = await this.checkIsUserAlreadyLiked(userId, messageId)
    if (isUserAlreadyLiked) {
      throw new Error(MessagesException.UserAlreadyLikedMessage);
    }
    await this.messageUserRelationShip.create({ userId, messageId });
    return { message: [`Liked message:${message?.message} successfully`] };
  }



  public async unlikeMessage(userId: number, messageId: number):Promise<any> {
    const user = await this.userDb.findOne({ where: { id: userId } })
    const message = await this.messageDb.findOne({ where: { id: messageId } })

    if (!user) {
      throw new Error(MessagesException.UserNotFound)
    }

    if (!message) {
      throw new Error(MessagesException.MessageNotFound)
    }

    const isUserAlreadyLiked = await this.checkIsUserAlreadyLiked(userId, messageId)
    if (isUserAlreadyLiked) {
      await this.messageUserRelationShip.destroy({
        where: { userId, messageId },
      });
    }
    return { message: [`Unliked message:${message?.message} successfully`] };
    
  }

  private async checkIsUserAlreadyLiked(userId: number, messageId: number): Promise<boolean> {
    const isUserAlreadyLiked = await this.messageUserRelationShip.findOne({ where: { userId, messageId }, })
    return isUserAlreadyLiked ? true : false

  }
}
