import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Crew {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  role: string;
}
