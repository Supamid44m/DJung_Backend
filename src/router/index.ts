import { Router } from "express";
// import useRouter from "./auth/auth.route";
import messageRouter from "./messages/message.route";


const router = Router();

// router.use('/auth',useRouter)
router.use('/messages',messageRouter)
export default router