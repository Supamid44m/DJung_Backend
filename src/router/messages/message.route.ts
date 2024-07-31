import { Router } from "express";

const messageRouter = Router()


messageRouter.get('/example', (req, res) => {
    res.send('Example route');
  });

export default messageRouter