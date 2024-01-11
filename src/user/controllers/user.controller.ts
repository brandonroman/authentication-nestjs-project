import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  find() {
    return this.userService.find();
  }

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }
}
