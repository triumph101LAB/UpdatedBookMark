import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Books } from "./bookmark.schema";
import mongoose from "mongoose";
@Schema()
export class User{

    @Prop({unique:true, required:true})
    username:string;

    @Prop({required:true})
    password:string;

    //@Prop({unique:false})
    //email:string;
    
    //@Prop({type:mongoose.Schema.Types.ObjectId, ref:'Books'})
    //books:Books[];
}

export const UserSchema = SchemaFactory.createForClass(User);