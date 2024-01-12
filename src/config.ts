import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    apiKey: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET,
    jwtTime: process.env.JWT_TIME,
    mssql: {
      database: process.env.DATABASE_NAME,
      port: +process.env.DATABASE_PORT,
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USER,
      host: process.env.DATABASE_HOST,
    },
  };
});
