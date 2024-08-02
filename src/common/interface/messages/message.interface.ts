import { IUser } from "../auth/user.interface";
import { BaseInterface } from "../common/base.interface";

export interface IMessage extends BaseInterface {
    message: string | null,
    likedBy: IUser[] | null
    isAnonymous: boolean
    createdBy: IUser | null
}

export interface IMessageCreate {
    message: string;
    likedBy: IUser[] | null
    isAnonymous: boolean;
    createdById: number | null;
}