import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { ResponseUserDto } from '../dtos/response-user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { plainToInstance } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { FilterUserDto } from '../dtos/filter-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  public users: ResponseUserDto[] = [];
  async find(params?: FilterUserDto): Promise<ResponseUserDto[]> {
    const findUsers = await this.userRepository.find({ where: { ...params } });
    return findUsers.map((user: User) =>
      plainToInstance(ResponseUserDto, user),
    );
  }

  async findOne(id: string): Promise<ResponseUserDto> {
    const findUser = await this.userRepository.findOne({ where: { id } });
    return plainToInstance(ResponseUserDto, findUser);
  }

  async findByEmail(email: string): Promise<ResponseUserDto> {
    const findUser = await this.userRepository.findOne({ where: { email } });
    if (!findUser) throw new NotFoundException(`Email ${email} not found`);
    return plainToInstance(ResponseUserDto, findUser);
  }

  async create(data: CreateUserDto): Promise<ResponseUserDto> {
    const findUserByEmail = await this.find({ email: data.email });
    if (findUserByEmail.length != 0)
      throw new BadRequestException(`Email ${data.email} already exists`);
    let newUser = this.userRepository.create(data);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    newUser = await this.userRepository.save(newUser);
    delete newUser.password;
    return plainToInstance(ResponseUserDto, newUser);
  }
}
