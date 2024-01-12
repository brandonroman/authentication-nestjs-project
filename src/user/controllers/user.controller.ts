import { Body, Controller, Post } from '@nestjs/common';

import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { Public } from 'src/auth/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }
}
