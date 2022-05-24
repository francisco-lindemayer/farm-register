import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

interface configInterface {
  development: TypeOrmModuleOptions;
}

const config: configInterface = {
  development: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: true,
  },
};

console.log('====================================');
console.log('NODE_ENV', process.env.NODE_ENV);
console.log('====================================');

export const dbconfig = config[process.env.NODE_ENV || 'development'];
