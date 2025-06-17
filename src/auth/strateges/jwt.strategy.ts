import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'abc123', // Use your JWT secret
        });
    }

    async validate(payload: any) {
        console.log('Inside JwtStrategy validate method:');
        console.log('Payload:', payload);
        return payload;
    }
    
}