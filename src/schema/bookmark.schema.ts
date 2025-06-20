import { Schema ,SchemaFactory, Prop, raw} from "@nestjs/mongoose";
import { max, min } from "class-validator";
import { Document,Types } from "mongoose";

@Schema()
export class Books extends Document {

    @Prop({unique: true})
    title:string;
    
    @Prop({required:true})
    author:string;

    @Prop({required:true})
    description:string;

  @Prop(raw({
    min: { type: Number, require:true},
    max: { type: Number, require:true },
  }))
  ageRange: {min: number; max: number}

    
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;
    
}

export const BookMarkSchema = SchemaFactory.createForClass(Books);
export type Book = Books ;