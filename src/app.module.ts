import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProducerModule } from './producer/producer.module';
@Module({
  imports: [DatabaseModule, ProducerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
