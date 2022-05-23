import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProducerModule } from './producer/producer.module';
import { ProducerFarmModule } from './producer-farm/producer-farm.module';
@Module({
  imports: [DatabaseModule, ProducerModule, ProducerFarmModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
