import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './Bookmark/bookmark.module';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Mongoose } from 'mongoose';
import { BookMarkSchema, Books } from './schema/bookmark.schema';
import { AppConfigModule } from './config/app-config.controller';
import { AppConfigService } from './config/app-config.service';

@Module({
  imports: [MongooseModule.forRootAsync({
    imports:[AppConfigModule],
    inject:[AppConfigService],
    useFactory: async (configService: AppConfigService) =>({
      uri: configService.dbUri,
    }),

  }),
    MongooseModule.forFeature([
      {
        name :Books.name, schema:BookMarkSchema
      }
    ]),
    AuthModule, BookmarkModule,
     ConfigModule.forRoot({
      envFilePath:['.env'],
      
     // cache:true,
      isGlobal:true,
      //load:[config]
     }),
  ],
 // controllers: [AppController],
  //providers: [AppService],

})
export class AppModule {}
