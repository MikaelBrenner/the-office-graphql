import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { CreateUserDTO } from './dto/create.user.dto';
import { GetUserArgs } from './dto/get.user.args';
import { GetUsersArgs } from './dto/get.users.args';
import { UpdateUserDTO } from './dto/update.user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      userId: 'a',
      email: 'a@a.com',
    },
    {
      userId: 'b',
      email: 'b@b.com',
    },
  ];

  public createUser(user: CreateUserDTO): User {
    const newUser = {
      userId: String(randomInt(10000)),
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  public updateUser(updateDTO: UpdateUserDTO): User {
    const user = this.users.find((user) => user.userId === updateDTO.userId);
    Object.assign(user, this.updateUser);
    return user;
  }

  public getUser(getUserArgs: GetUserArgs) {
    return this.users.find((user) => user.userId === getUserArgs.userId);
  }

  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  }
}
