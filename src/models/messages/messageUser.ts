import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import { Message } from "./message";
import { User } from "../auth/user";

@Table({ tableName: "messages_user_liked_relationship" })
export class MessageUserLikedRelationShip extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => Message)
  @Column(DataType.INTEGER)
  messageId!: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt?: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt?: Date;
}
