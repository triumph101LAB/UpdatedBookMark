import { IsString, IsNotEmpty } from "class-validator";


export class CreateBookmarkDto{

    @IsString()
    @IsNotEmpty()
    title:string;

    @IsNotEmpty()
    @IsString()
    author:string;

    @IsNotEmpty()
    @IsString()
    description:string;

    
    /*
    @IsString()
    @IsNotEmpty()
    userId:string;
    
    */
    // userId is not required here because it will be handled in the service layer
     // and it's set by the JWT token in the request header
    // so we don't need to validate it here
}