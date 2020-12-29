import { Module } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CrewResolver } from './crew.resolver';
import { ApiConsumerModule } from 'src/api-consumer/api-consumer.module';

@Module({
  providers: [CrewResolver, CrewService],
  imports: [ApiConsumerModule],
})
export class CrewModule {}
