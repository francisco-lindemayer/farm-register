import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProducerModule } from './producer/producer.module';
import { ProducerFarmModule } from './producer-farm/producer-farm.module';
import { CropModule } from './crop/crop.module';
import { StateModule } from './state/state.module';
@Module({
  imports: [
    DatabaseModule,
    ProducerModule,
    ProducerFarmModule,
    CropModule,
    StateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
