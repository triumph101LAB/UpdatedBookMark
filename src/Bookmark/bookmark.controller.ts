import { Controller, Post, Body, UseGuards, Req, Get, Patch, Delete, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guarg';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorators/auth.decorators';
import { UserId } from 'src/auth/decorators/userId.decorator';
@Controller('books')
@UseGuards(JwtAuthGuard)
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post()
  async create(@UserId() userId:string,@Body() body) {
    return this.bookmarkService.createBook(userId, body);
  }

  @Get()
  async findAll(@UserId() userId:string) {
    return this.bookmarkService.getBooks(userId);
  }

  @Patch(':id')
  async update(@UserId() userId:string, @Param('id') id: string, @Body() body) {
    return this.bookmarkService.updateBook(userId, id, body);
  }

  @Delete(':id')
  async delete(@UserId() userId:string, @Param('id') id: string) {
    const deleted =  await this.bookmarkService.deleteBook(userId, id);

    if(deleted){
      return { message: 'Book deleted successfully', book:deleted };

    }
    else{
      return { message: 'Book not found or not deleted' };
    }
  }
}