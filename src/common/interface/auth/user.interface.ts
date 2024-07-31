import { BaseInterface } from "../common/base.interface";

export interface IUser extends BaseInterface {
    username: string;
    email: string;
    password: string;
}


export interface IUserSingUp {
    username: string;
    password: string;
    email:string;
}

export interface IUserSingIn{
    username:string;
    password:string;
}