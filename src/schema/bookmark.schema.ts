import { Schema ,SchemaFactory, Prop} from "@nestjs/mongoose";
import { Document,Types } from "mongoose";

@Schema()
export class Books extends Document {

    @Prop({unique: true})
    title:string;
    
    @Prop({required:true})
    author:string;

    @Prop({required:true})
    description:string;

    
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

}

export const BookMarkSchema = SchemaFactory.createForClass(Books);
export type Book = Books ;