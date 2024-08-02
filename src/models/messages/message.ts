import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany, CreatedAt, UpdatedAt, BelongsToMany } from 'sequelize-typescript';
import { User } from '../auth/user'; // Import User model if necessary
import { IMessage } from '../../common/interface/messages/message.interface';
import { IUser } from '../../common/interface/auth/user.interface';
import { MessageUserRelationShip } from './messageUser';

@Table({
  tableName: 'messages',
  modelName: 'Message'
})
export class Message extends Model<IMessage> implements IMessage {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  message!: string | null;

  @Column(DataType.BOOLEAN)
  isAnonymous!: boolean;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  createdById!: number | null;

  @BelongsTo(() => User, 'createdById')
  createdBy!: User | null;

  @BelongsToMany(() => User, () => MessageUserRelationShip)
  likedBy!: User[];

  @CreatedAt
  @Column(DataType.DATE)
  createdAt?: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt?: Date;
}
