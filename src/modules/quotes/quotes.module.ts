import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesResolver } from './quotes.resolver';
import { ApiConsumerModule } from 'src/api-consumer/api-consumer.module';

@Module({
  providers: [QuotesResolver, QuotesService],
  imports: [ApiConsumerModule],
})
export class QuotesModule {}
