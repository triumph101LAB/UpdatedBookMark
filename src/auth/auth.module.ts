import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./strateges/local.strategy";
import { JwtStrategy } from "./strateges/jwt.strategy";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schema/user.schema";
@Module({
    imports:[
        PassportModule,
        JwtModule.register({

            secret:'abc123',
            signOptions: { expiresIn: '1h' },
        }),
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