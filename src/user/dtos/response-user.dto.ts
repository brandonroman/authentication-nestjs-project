import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ResponseUserDto {
  @Expose()
  readonly id: string;

  @Expose()
  readonly dateCreate: Date;

  @Expose()
  readonly dateUpdate: Date;

  @Expose()
  readonly email: string;

  @Expose()
  readonly password: string;
}
