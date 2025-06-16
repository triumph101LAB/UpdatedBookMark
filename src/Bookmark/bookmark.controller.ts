import { Controller, Post, Body, UseGuards, Req, Get, Patch, Delete, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guarg';
import { BookmarkService } from './bookmark.service';

@Controller('books')
@UseGuards(JwtAuthGuard)
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post()
  async create(@Req() req, @Body() body) {
    return this.bookmarkService.createBook(req.user.userId, body);
  }

  @Get()
  async findAll(@Req() req) {
    return this.bookmarkService.getBooks(req.user.userId);
  }

  @Patch(':id')
  async update(@Req() req, @Param('id') id: string, @Body() body) {
    return this.bookmarkService.updateBook(req.user.userId, id, body);
  }

  @Delete(':id')
  async delete(@Req() req, @Param('id') id: string) {
    const deleted =  this.bookmarkService.deleteBook(req.user.userId, id);

    if(deleted){
      return { message: 'Book deleted successfully', book:deleted };

    }
    else{
      return { message: 'Book not found or not deleted' };
    }
  }
}