import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateUserDTO } from './dto/create.user.dto';
import { GetUserArgs } from './dto/get.user.args';
import { GetUsersArgs } from './dto/get.users.args';
import { UpdateUserDTO } from './dto/update.user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.usersService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: true })
  getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.usersService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserDTO): User {
    return this.usersService.createUser(createUserData);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserDTO): User {
    return this.usersService.updateUser(updateUserData);
  }
}
