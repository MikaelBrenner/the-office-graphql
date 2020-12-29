import { Query, Resolver } from '@nestjs/graphql';
import { Episode } from './entities/episode.entity';
import { EpisodesService } from './episodes.service';

@Resolver()
export class EpisodesResolver {
  constructor(private readonly episodesService: EpisodesService) {}

  @Query(() => [Episode], { name: 'episodes', nullable: true })
  getEpisodes() {
    return this.episodesService.getEpisodes();
  }
}
