// import { Module } from "@nestjs/common";
// import { ConfigModule, ConfigService } from "@nestjs/config";
// import { AppConfigService } from "./app-config.service";
// import envs from "../constant/envs";
// console.log(envs);
// @Module({
//     imports:[ConfigModule.forRoot({load : [envs]})],
    
//     providers:[AppConfigService,ConfigService],
//     exports:[AppConfigService,ConfigService],
// })
// export class AppConfigModule{

// }

//import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '../constant/envs';
import { AppConfigService } from './app-config.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    //   validationSchema: Joi.object({
    //     APP_ENV: Joi.string()
    //       .valid('dev', 'stage', 'test', 'prod', 'production', 'development')
    //       .default('dev'),
    //     APP_NAME: Joi.string().default('Presidy'),
    //     APP_PORT: Joi.number().default('3000'),
    //     SENTRY_DNS: Joi.string().uri().default(''),
    //   }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
