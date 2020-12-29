import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodesResolver } from './episodes.resolver';
import { ApiConsumerModule } from 'src/api-consumer/api-consumer.module';

@Module({
  providers: [EpisodesResolver, EpisodesService],
  imports: [ApiConsumerModule],
})
export class EpisodesModule {}
