import { IUser } from '../../common/interface/auth/user.interface';
import { AutoIncrement, Column, CreatedAt, DataType, Model, NotNull, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';


@Table({
    tableName: 'users',
    modelName: 'User'
})
export class User extends Model<IUser> implements IUser {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    
    @Column({type:DataType.STRING,unique:true})
    userName!: string;

    @Column(DataType.STRING)
    email!: string;

    @Column(DataType.STRING)
    password!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: null
    })
    role!: string | null;

    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;

}