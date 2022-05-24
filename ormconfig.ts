import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  migrations: ['dist/src/database/migrations/*.js'],
  entities: ['dist/src/**/*.entity.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default config;
