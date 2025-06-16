import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { UnauthorizedException,Injectable } from "@nestjs/common";
@Injectable()

export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService: AuthService) {
        super();
    }

    validate(username:string, password:string) {
        console.log('LocalStrategy validate called with:', username, password);
        const user = this.authService.validateUser(username, password);

        if(!user) throw new UnauthorizedException();
        return user;
    }
    
}