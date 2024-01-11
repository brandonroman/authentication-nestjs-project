import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ResponseUserDto } from '../dtos/response-user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  public users: ResponseUserDto[] = [];
  find() {
    return this.users;
  }
  //   findOne() {}
  findByEmail(email: string): ResponseUserDto {
    const findUser = this.users.find(
      (user: ResponseUserDto) => user.email === email,
    );
    console.log(findUser);
    console.log(this.users);
    if (!findUser) throw new NotFoundException(`Email ${email} not found`);
    return findUser;
  }

  create(data: CreateUserDto) {
    const findUserByEmail = this.users.find(
      (user: ResponseUserDto) => user.email === data.email,
    );

    if (findUserByEmail)
      throw new BadRequestException(`Email ${data.email} already exists`);

    const newUser = plainToInstance(ResponseUserDto, data);
    this.users.push(newUser);
    return true;
  }
}
