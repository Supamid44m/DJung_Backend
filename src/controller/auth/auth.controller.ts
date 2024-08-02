import { Module } from "module"
import { AuthService } from "../../services/auth"
import { IUser, IUserSingUp } from "../../common/interface/auth/user.interface"
import { NextFunction, Request, RequestHandler, Response } from "express"
import { AuthException } from "../../common/constants/auth/auth.exception"


export class AuthController {
  private readonly authService: AuthService = new AuthService()

  
  public signUp: RequestHandler = async (req, res): Promise<void> => {
    try {
      const body: IUserSingUp = req.body
      await this.authService.signUp(body)
      res.status(201).json({ message: ["User signed up successfully"] });
    }catch(error:any){
      res.status(500).json({message:[error?.message]})
    }
  }


  public signIn:RequestHandler = async(req,res):Promise<void>=>{
    try{

    }catch(error:any){

    }
  }
}