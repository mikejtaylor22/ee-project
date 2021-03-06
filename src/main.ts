import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HttpStatus, ValidationPipe} from '@nestjs/common';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalFilters(
  //   new ValidationFilter()
  // )

  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    transform:true,
    disableErrorMessages:true,
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
  })
  
  );


  

  await app.listen(3000);
}

bootstrap();
