import { BaseInterface } from "../common/base.interface";

export interface IUser extends BaseInterface {
    userName: string;
    email: string;
    password: string;
    role:string | null;
}


export interface IUserSingUp {
    userName: string;
    password: string;
    email:string;
    role:string | null;
}

export interface IUserSingIn{
    userName:string;
    password:string;
}