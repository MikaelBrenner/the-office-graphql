import { Resolver, Query } from '@nestjs/graphql';
import { CharactersService } from './characters.service';
import { Character } from './entities/character.entity';

@Resolver(() => Character)
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query(() => [Character], { name: 'characters', nullable: true })
  getCharacters() {
    return this.charactersService.getCharacters();
  }
}
