import { BaseInterface } from "../common/base.interface";

export interface IUser extends BaseInterface {
    username: string;
    email: string;
    password: string;
}