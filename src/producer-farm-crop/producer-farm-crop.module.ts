import { Module } from '@nestjs/common';
import { ProducerFarmCropService } from './producer-farm-crop.service';
import { ProducerFarmCropController } from './producer-farm-crop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerFarm } from 'src/producer-farm/entities/producer-farm.entity';
import { Crop } from 'src/crop/entities/crop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProducerFarm, Crop])],
  controllers: [ProducerFarmCropController],
  providers: [ProducerFarmCropService],
})
export class ProducerFarmCropModule {}
