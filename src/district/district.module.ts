import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { District } from './entities/district.entity';

@Module({
  imports: [TypeOrmModule.forFeature([District])],
  controllers: [],
  providers: [],
})
export class DistrictModule {}
