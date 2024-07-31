import { Sequelize } from "sequelize-typescript";
import { dbConfig } from "../../config/db.config";
import { User } from "../../models/auth/user";

export  const sequelize =new Sequelize({
    dialect:"postgres",
    ...dbConfig,
    models:[User]
})

