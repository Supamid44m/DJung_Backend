import { Router } from "express";
import { MessageController } from "../../controller/messages";

const messageRouter = Router()
const messageController = new MessageController()

  messageRouter.get("/",messageController.getAllMessages)
  messageRouter.post("/create",messageController.createMessage)
export default messageRouter  