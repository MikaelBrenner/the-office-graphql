import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CharactersModule } from './modules/characters/characters.module';
import { ApiConsumerModule } from './api-consumer/api-consumer.module';
import { QuotesModule } from './modules/quotes/quotes.module';
import { EpisodesModule } from './modules/episodes/episodes.module';
import { CrewModule } from './modules/crew/crew.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    CharactersModule,
    ApiConsumerModule,
    QuotesModule,
    EpisodesModule,
    CrewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
