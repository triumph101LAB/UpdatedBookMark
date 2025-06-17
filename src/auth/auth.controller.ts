import { Controller, Post,Body, UseGuards,Get, Req } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guard/local.guard';
import { JwtAuthGuard } from './guard/jwt.guarg';
import { GetUser } from './decorators/auth.decorators';
@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService) {}
    @Post('login')
   // @UseGuards(AuthGuard('local'))
   @UseGuards(LocalGuard)
    login(@GetUser() user:Request){
        //return this.authService.validateUser(authPayLoad);
        return this.authService.login(user);
       
    }
    @Post('signup')
    signUp(@Body() body: AuthPayloadDto){
        const user = this.authService.signup(body.username, body.password, body.email); 
        return user;

    }

    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@GetUser() user:Request){

        console.log('Inside AuthController status Method');
        console.log('Request User:', user);
        return user;
    }

}