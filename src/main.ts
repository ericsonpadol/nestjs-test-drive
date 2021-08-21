import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(port) {
  const app = await NestFactory.create(AppModule);
  await app.listen(port || 5000);
}

bootstrap(process.env.PORT);
