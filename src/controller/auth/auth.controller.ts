import { Module } from "module"
import { AuthService } from "../../services/auth"
import { IUser, IUserSingUp } from "../../common/interface/auth/user.interface"
import { NextFunction, Request, RequestHandler, Response } from "express"


export class AuthController {
  private readonly authService: AuthService = new AuthService()
  private excepiton = []
  public signup: RequestHandler = async (req, res): Promise<void> => {
    const body: IUserSingUp = req.body
    await this.authService.signUp(body)
    res.status(201).json({ message: "User signed up successfully" });
  }
}