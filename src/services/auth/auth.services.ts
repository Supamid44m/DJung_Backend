import { AuthException } from "../../common/constants/auth/auth.exception"
import { IUserSingUp } from "../../common/interface/auth/user.interface"
import { User } from "../../models/auth/user"
import { Jwt } from "jsonwebtoken"


export class AuthService {
    private db = User
    private saltRounds = process.env.SALT_ROUD
    private secretKey =process.env.SECRET_KEY 

    public async signUp(body: IUserSingUp,): Promise<void> {
        try {
            const email = body.email
            const duplicateEmail = await this.db.findOne({
                where:{email:email}
            })

            if(duplicateEmail){
                 throw new Error(AuthException.EmailAlreadyExists);
            }
            const user = await this.db.create(body)
        } catch (error) {
            throw error;
        }
    }

    public async signIn(): Promise<void> {
        try {

        } catch (error) {

        }
    }

}