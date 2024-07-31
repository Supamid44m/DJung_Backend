import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import router from './router';
import { sequelize } from './common/provider/db.provider';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT ?? 5555

const app: Application = express()


app.use(router)
const startServer = async () => {
  try {
    // Authenticate the connection to the database
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Sync all models
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the process with an error code
  }
};

startServer()