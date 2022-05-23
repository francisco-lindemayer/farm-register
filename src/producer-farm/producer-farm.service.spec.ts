import { Test, TestingModule } from '@nestjs/testing';
import { ProducerFarmService } from './producer-farm.service';

describe('ProducerFarmService', () => {
  let service: ProducerFarmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducerFarmService],
    }).compile();

    service = module.get<ProducerFarmService>(ProducerFarmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
