import { Module } from '@nestjs/common';
import { ApiConsumer } from './api-consumer';

@Module({
  exports: [ApiConsumer],
  providers: [ApiConsumer],
})
export class ApiConsumerModule {}
