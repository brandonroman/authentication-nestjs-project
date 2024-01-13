import { Body, Controller, Get, Post, Request } from '@nestjs/common';

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

  @Get('get-profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
