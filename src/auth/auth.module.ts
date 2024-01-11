import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UserService } from 'src/user/services/user.service';

@Module({
  providers: [AuthService, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
