import { Field, ObjectType } from '@nestjs/graphql';
import { Character } from 'src/modules/characters/entities/character.entity';

@ObjectType()
export class Quote {
  @Field()
  _id: string;
  @Field()
  content: string;
  @Field(() => Character)
  character: Character;
}
