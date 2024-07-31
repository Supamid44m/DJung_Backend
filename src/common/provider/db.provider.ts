import { Sequelize } from "sequelize-typescript";
import { dbConfig } from "../../config/db.config";
import { User } from "../../models/auth/user";
import { Message } from "../../models/messages/message";
import { MessageUserRelationShip } from "../../models/messages/messageUser";

export  const sequelize =new Sequelize({
    dialect:"postgres",
    ...dbConfig,
    models:[User,Message,MessageUserRelationShip]
})

