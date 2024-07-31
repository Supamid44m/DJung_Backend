import { Router } from "express";
import { AuthController } from "../../controller/auth";
const useRouter = Router();
const authController =  new AuthController

useRouter.get('/',authController.signInController)
useRouter.post('/',)


export default useRouter