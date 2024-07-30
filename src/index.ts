import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT ?? 3000

const app:Application = express()

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});