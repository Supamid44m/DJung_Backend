import { IUser } from '../../common/interface/auth/user.interface';
import { AutoIncrement, Column, CreatedAt, DataType, Model, NotNull, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';


@Table({
    tableName:'users',
    modelName:'User'
})
export class User extends Model<IUser> implements IUser{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
  
    @Column(DataType.STRING)
    username!: string;
  
    @Column(DataType.STRING)
    email!: string;
  
    @Column(DataType.STRING)
    password!: string;
  
    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;
  
    @UpdatedAt 
    @Column(DataType.DATE)
    updatedAt!: Date;

}