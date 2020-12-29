import { Field, ObjectType } from '@nestjs/graphql';
import { Crew } from 'src/modules/crew/entities/crew.entity';

@ObjectType()
export class Episode {
  @Field()
  _id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  airDate: string;

  @Field(() => Crew)
  writer: Crew;

  @Field(() => Crew)
  director: Crew;
}
