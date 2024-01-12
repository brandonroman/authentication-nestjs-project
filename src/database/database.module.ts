import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';

import config from '../config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, host, database, password, port } =
          configService.mssql;
        return {
          type: 'mssql',
          host,
          port,
          username,
          password,
          database,
          dropSchema: false,
          synchronize: true,
          autoLoadEntities: true,
          options: { trustServerCertificate: true },
        };
      },
    }),
  ],
})
export class DatabaseModule {}
