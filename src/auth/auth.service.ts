import { HttpException, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { HttpAdapterHost } from '@nestjs/core';
import { access } from 'fs';
/*
const fakeUsers = [
    {   id:1,
        username: 'testuser',
        password: 'password'
    },
    {   id:2,
        username: 'admin',
        password: 'admin123'
    }
]
    */
@Injectable()
export class AuthService {
constructor(private jwtService:JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
){}

/*
validateUser({username,password}:AuthPayloadDto){
    const FindUser =  fakeUsers.find((user) => user.username === username);

    if(!FindUser) throw new HttpException('User not found', 404);
    if(password == FindUser.password){
        const {password, ...user} = FindUser;
        
       return this.jwtService.sign(user);

    }

}
    */


async signup(username: string, password:string, email:string){
    const findUser = await this.userModel.findOne({username});
    const FindEmail =  await this.userModel.findOne({email});

    if (FindEmail)  throw new HttpException('Email already registerd', 400);
    if(findUser) throw new HttpException('User already Exist',400);

    const hashed = await bcrypt.hash(password, 10);
    const user = new this.userModel({username, password: hashed, email});

    
    await user.save();

    return { id:user._id, username: user.username};
}

async validateUser(username:string, password:string){
    const user = await this.userModel.findOne({username});
    if(!user) throw new HttpException('User Not found', 404);

    // const FindEmail =  await this.userModel.findOne({email});
   // if(!FindEmail) throw new HttpException('Email not found', 400);
    const valid = await bcrypt.compare(password,user.password);
    if(!valid) throw new HttpException("Invalid User Detail",401);

    return {id: user._id, username: user.username, email:user.email};
}

async login(user:any){
    const payload = { username :user.username, userId: user.id, email: user.email};
    return {access_token: this.jwtService.sign(payload)};
}
}