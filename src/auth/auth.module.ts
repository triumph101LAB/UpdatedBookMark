import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./strateges/local.strategy";
import { JwtStrategy } from "./strateges/jwt.strategy";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schema/user.schema";
import { AppConfigService } from "src/config/app-config.service";
import { AppConfigModule } from "src/config/app-config.controller";
@Module({
    imports:[
        PassportModule,
        JwtModule.registerAsync({

            imports:[AppConfigModule],
            inject :[AppConfigService],
            useFactory: async (configService: AppConfigService) =>({
                secret: configService.jwtAccessSecret,
                signOptions: { expiresIn: '1h' },
            }),
            
        }),
        AppConfigModule,
        MongooseModule.forFeature([

            {
                name:User.name,
                schema:UserSchema
            }
        ])
    ],
    controllers:[AuthController],
    providers:[AuthService,LocalStrategy,JwtStrategy],
})
export class AuthModule{


}