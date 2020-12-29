import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersResolver } from './characters.resolver';
import { ApiConsumerModule } from 'src/api-consumer/api-consumer.module';

@Module({
  providers: [CharactersResolver, CharactersService],
  imports: [ApiConsumerModule],
})
export class CharactersModule {}
