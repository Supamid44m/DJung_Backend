import { Router } from "express";
import { AuthController } from "../../controller/auth";
const useRouter = Router();
const authController =  new AuthController


useRouter.post('/signup',authController.signUp)


export default useRouter