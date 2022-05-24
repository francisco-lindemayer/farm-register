import { Module } from '@nestjs/common';
import { ProducerFarmService } from './producer-farm.service';
import { ProducerFarmController } from './producer-farm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerFarm } from './entities/producer-farm.entity';
import { Producer } from 'src/producer/entities/producer.entity';
import { District } from 'src/district/entities/district.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProducerFarm, Producer, District])],
  controllers: [ProducerFarmController],
  providers: [ProducerFarmService],
})
export class ProducerFarmModule {}
