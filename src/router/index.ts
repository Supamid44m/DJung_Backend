import { RequestHandler, Router } from "express";
// import useRouter from "./auth/auth.route";
import messageRouter from "./messages/message.route";
import authRouter from "./auth/auth.route";


const router = Router();

router.get('/',(req,res)=>{
    res.send("DJUNG-API")
})

router.use('/auth',authRouter)
router.use('/messages',messageRouter)
export default router