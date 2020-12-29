import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUserDTO {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field()
  email: string;
}
