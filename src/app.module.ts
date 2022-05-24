import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProducerModule } from './producer/producer.module';
import { ProducerFarmModule } from './producer-farm/producer-farm.module';
import { CropModule } from './crop/crop.module';
import { StateModule } from './state/state.module';
import { DistrictModule } from './district/district.module';
import { ProducerFarmCropModule } from './producer-farm-crop/producer-farm-crop.module';
@Module({
  imports: [
    DatabaseModule,
    ProducerModule,
    ProducerFarmModule,
    CropModule,
    StateModule,
    DistrictModule,
    ProducerFarmCropModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
