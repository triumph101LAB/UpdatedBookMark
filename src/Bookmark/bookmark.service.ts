import { HttpException, Injectable } from "@nestjs/common";
import { CreateBookmarkDto } from "./dto/CreateBookmark.dto";
import { BookMarkSchema } from "src/schema/bookmark.schema";
import { Books } from "src/schema/bookmark.schema";
import { InjectModel } from "@nestjs/mongoose";
import  { Model } from "mongoose";
import { User } from "src/schema/user.schema";
import { UpdateBookmarkDto } from "./dto/UpdateBookmark.dto";

import { Types } from "mongoose";
@Injectable()

export class BookmarkService{
    
    constructor(@InjectModel(Books.name) private booksModel: Model<Books>,@InjectModel(User.name) private userModel: Model<User>){}
 

async createBook(userId:string, createBookmarkDto:CreateBookmarkDto){
    const book = new this.booksModel({...createBookmarkDto, userId: new Types.ObjectId(userId)});
    return book.save();
}

async getBooks(userId: string) {
    return this.booksModel.find({ userId: new Types.ObjectId(userId) });
  }


async getBooksById(userId:string, bookId:string){

  return this.booksModel.findById({_id:new Types.ObjectId(bookId), userId: new Types.ObjectId(userId)})
}

  

  async updateBook(userId: string, bookId: string, createBookmarkDto:CreateBookmarkDto) {
    return this.booksModel.findOneAndUpdate(
      { _id: new Types.ObjectId(bookId), userId:new Types.ObjectId(userId) },
      createBookmarkDto,
      { new: true }
    );
  }

  async deleteBook(userId: string, bookId: string) {
    return this.booksModel.findOneAndDelete({ _id: new Types.ObjectId(bookId), userId:new Types.ObjectId(userId) });
  }
}