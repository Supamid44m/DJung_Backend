import {
  IMessage,
  IMessageCreate,
  IMessageResponse,
} from "../../common/interface/messages/message.interface";
import { User } from "../../models/auth/user";
import { Message } from "../../models/messages/message";
import { MessageUserLikedRelationShip } from "../../models/messages/messageUser";
import { isNullOrUndefined } from "../../utils/object.utils";

export class MessageService {
  private db = Message;
  private messageUserRelationShip = MessageUserLikedRelationShip;
  private userDb = User;

  public async getAllMessages(): Promise<IMessageResponse[]> {
    const messages = await this.db.findAll({});
    const messageRespone = await this.fullfillMessageResponse(messages);
    return messageRespone;
  }

  public async createMessage(body: IMessageCreate): Promise<Message> {
    const message = await this.db.create(body);
    return message;
  }

  public async fullfillMessageResponse(
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

  public checkIsAnonymousCreate(message: Message) {
    return message.isAnonymous ? true : false;
  }

  public async fullfillMessageUserLiked(
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
}
