import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bycrpt from 'bcrypt';

import { UserService } from 'src/user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(email: string, pass: string): Promise<any> {
    const findUser = await this.userService.findByEmail(email);
    const isMatch = await bycrpt.compare(pass, findUser.password);
    if (!isMatch) throw new UnauthorizedException();
    const payload = { sub: findUser.id, username: findUser.email };
    const { password, ...rta } = findUser;
    return {
      access_token: await this.jwtService.signAsync(payload),
      ...rta,
    };
  }
}
