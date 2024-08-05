import { IUser } from "../auth/user.interface";
import { BaseInterface } from "../common/base.interface";

export interface IMessage extends BaseInterface {
  message: string | null;
  likedBy: IUser[] | null;
  isAnonymous: boolean;
  createdBy: string | null;
  createdById: number | null;
}

export interface IMessageCreate {
  message: string;
  likedBy: IUser[] | null;
  isAnonymous: boolean;
  createdById: number | null;
}

export interface IMessageResponse extends BaseInterface {
  message: string | null;
  likedBy: IUser[];
  isAnonymous: boolean;
  createdBy: string | null;
  createdById: number | null;
}

export interface ILikeMessage extends BaseInterface {
  userId: number
}
