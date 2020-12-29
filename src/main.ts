import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log(`Server running at port ${PORT}`);
  console.log(
    `The GraphQL Playground can be accessed at http://localhost:${PORT}/graphql`,
  );
  await app.listen(PORT);
}
bootstrap();
