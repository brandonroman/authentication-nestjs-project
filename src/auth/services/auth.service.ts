import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from '../dtos/login.dto';
import { UserService } from 'src/user/services/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  login(loginDto: LoginDto) {
    const findUser = this.userService.findByEmail(loginDto.email);

    if (findUser.password != loginDto.password)
      throw new BadRequestException(`User or password are wrong`);
    return true;
  }
}
