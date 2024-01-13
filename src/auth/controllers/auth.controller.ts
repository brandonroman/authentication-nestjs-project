import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { RequestSignInDto } from '../dtos/request-sign-in.dto';
import { Public } from '../public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post()
  login(@Body() signInDto: RequestSignInDto) {
    return this.authService.signUp(signInDto.email, signInDto.password);
  }
}
