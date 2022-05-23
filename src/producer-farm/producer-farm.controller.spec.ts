import { Test, TestingModule } from '@nestjs/testing';
import { ProducerFarmController } from './producer-farm.controller';
import { ProducerFarmService } from './producer-farm.service';

describe('ProducerFarmController', () => {
  let controller: ProducerFarmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerFarmController],
      providers: [ProducerFarmService],
    }).compile();

    controller = module.get<ProducerFarmController>(ProducerFarmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
