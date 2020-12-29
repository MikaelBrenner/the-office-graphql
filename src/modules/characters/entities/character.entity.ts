import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Character {
  @Field()
  _id: string;

  @Field()
  email: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;
}
