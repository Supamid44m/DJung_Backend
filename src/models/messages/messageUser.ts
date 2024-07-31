import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Message } from "./message";
import { User } from "../auth/user";

@Table({ tableName: 'messages-user-relationship' })
export class MessageUserRelationShip extends Model {
    @ForeignKey(() => Message)
    @Column(DataType.INTEGER)
    messageId!: number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId!: number;
}