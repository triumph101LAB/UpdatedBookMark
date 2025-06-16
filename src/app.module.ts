import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './Bookmark/bookmark.module';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/BookMarkDB'),
    AuthModule, BookmarkModule,
  ],
 // controllers: [AppController],
  //providers: [AppService],

})
export class AppModule {}
