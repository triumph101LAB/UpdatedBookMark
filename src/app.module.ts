import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './Bookmark/bookmark.module';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Mongoose } from 'mongoose';
import { BookMarkSchema, Books } from './schema/bookmark.schema';
@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/BookMarkDB'),
    MongooseModule.forFeature([
      {
        name :Books.name, schema:BookMarkSchema
      }
    ]),
    AuthModule, BookmarkModule,
  ],
 // controllers: [AppController],
  //providers: [AppService],

})
export class AppModule {


}
