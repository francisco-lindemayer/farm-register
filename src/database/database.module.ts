import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from './config';

@Module({
  imports: [TypeOrmModule.forRoot(dbconfig)],
})
export class DatabaseModule {}
