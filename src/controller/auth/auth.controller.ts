import { Module } from "module"
import { AuthService } from "../../services/auth"

export class AuthController{
    private readonly authService:AuthService = new AuthService()

    public signInController = async(body:Body):Promise<void>=>{
        return await this.authService.signIn()
      }
}