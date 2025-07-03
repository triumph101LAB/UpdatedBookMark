import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { AppConfigService } from "src/config/app-config.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor( private configeService:AppConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configeService.jwtAccessSecret, 
        });
    }

    async validate(payload: any) {
        console.log('Inside JwtStrategy validate method:');
        console.log('Payload:', payload);
        return payload;
    }
    
}