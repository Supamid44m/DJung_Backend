import type { SequelizeOptions } from "sequelize-typescript";

export const dbConfig: SequelizeOptions = {
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME ?? 'user',
    password: process.env.DB_PASSWORD ?? 'root',
    database: process.env.DB_NAME ?? 'DJUNG',
    dialectOptions: {
      timezone: '+07:00',
      connectTimeout: 3000,
      requestTimeout: 3000,
    },
    timezone: '+07:00',
}