import { IUser } from "../auth/user.interface";
import { BaseInterface } from "../common/base.interface";

export interface IMessage extends BaseInterface{ 
    message:string | null, 
    likedBy: IUser[]
    isAnonymous: boolean
    createdBy : IUser | null
}