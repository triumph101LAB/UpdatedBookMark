import { IsString, IsEmail, IsNotEmpty } from "class-validator";
// representing the request payload for authentication
// this DTO will be used to validate the incoming request data for authentication
export class AuthPayloadDto{

    @IsString()
    @IsNotEmpty()
    username:string;

    @IsString()
    @IsNotEmpty()
    password:string;
    /*
    @IsEmail()
    @IsNotEmpty()
    email:string;
*/

}