import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ForbidTinubuInterceptor } from './auth/interceptors/auth.interceptors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ForbidTinubuInterceptor()); // The placements matters
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(process.env.PORT ?? 3000); // it's start the server, any configuration after this will not affect incoming request
}
bootstrap();
