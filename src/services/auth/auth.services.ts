import { AuthException } from "../../common/constants/auth/auth.exception";
import {
  IUser,
  IUserSingIn,
  IUserSingUp,
} from "../../common/interface/auth/user.interface";
import { User } from "../../models/auth/user";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { isNullOrUndefined } from "../../utils/object.utils";

export class AuthService {
  private db = User;
  private saltRounds: number = 10;
  private secretKey = process.env.SECRET_KEY ?? "KUY";

  public async signUp(body: IUserSingUp): Promise<void> {
    try {
      const singUpBody: IUser = body;
      const username = body.userName;
      const email = body.email;
      const password = body.password;
      const role = body.role ?? "User";
      const hashPassword = await this.hashPassword(password);
      singUpBody.password = hashPassword;
      singUpBody.role = role;

      let duplicateUsername = await this.isDuplicateUsername(username);
      let duplicateEmail = await this.isDuplicateEmail(email);

      if (duplicateUsername) {
        throw new Error(AuthException.UsernameAlreaytExists);
      }

      if (duplicateEmail) {
        throw new Error(AuthException.EmailAlreadyExists);
      }

      await this.db.create(singUpBody);
    } catch (error) {
      throw error;
    }
  }

  public async isDuplicateUsername(username: string): Promise<boolean> {
    const isUsernameExist = await this.db.findOne({ where: { userName: username },
    });
    return isUsernameExist ? true : false;
  }

  public async isDuplicateEmail(email: string): Promise<boolean> {
    const isEmailExist = await this.db.findOne({ where: { email: email } });
    return isEmailExist ? true : false;
  }

  public async hashPassword(password: string): Promise<string> {
    const hashPassword = await bcrypt.hash(password, this.saltRounds);
    return hashPassword;
  }

  public async signIn(body: IUserSingIn): Promise<void> {
    try {
    } catch (error) {}
  }
}
