import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserDTO {
  @Field()
  @IsNotEmpty()
  email: string;
}
