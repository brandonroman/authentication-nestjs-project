import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(email: string, pass: string) {
    const findUser = await this.userService.findByEmail(email);
    if (findUser.password !== pass) throw new UnauthorizedException();
    const payload = { sub: findUser.id, username: findUser.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
