import { Controller, Post,Body, UseGuards,Get, Req } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guard/local.guard';
import { JwtAuthGuard } from './guard/jwt.guarg';
@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService) {}
    @Post('login')
   // @UseGuards(AuthGuard('local'))
   @UseGuards(LocalGuard)
    login(@Req() req:Request){
        //return this.authService.validateUser(authPayLoad);
        return this.authService.login(req.user);
       
    }
    @Post('signup')
    signUp(@Body() body: AuthPayloadDto){
        const user = this.authService.signup(body.username, body.password); 

    }

    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req:Request){

        console.log('Inside AuthController status Method');
        console.log('Request User:', req.user);
        return req.user;
    }

}