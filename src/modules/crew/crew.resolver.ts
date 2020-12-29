import { Resolver, Query } from '@nestjs/graphql';
import { CrewService } from './crew.service';
import { Crew } from './entities/crew.entity';

@Resolver()
export class CrewResolver {
  constructor(private readonly crewService: CrewService) {}

  @Query(() => [Crew], { name: 'crew', nullable: true })
  getCharacters() {
    return this.crewService.getCrew();
  }
}
