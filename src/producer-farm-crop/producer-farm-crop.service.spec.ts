import { Test, TestingModule } from '@nestjs/testing';
import { ProducerFarmCropService } from './producer-farm-crop.service';

describe('ProducerFarmCropService', () => {
  let service: ProducerFarmCropService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducerFarmCropService],
    }).compile();

    service = module.get<ProducerFarmCropService>(ProducerFarmCropService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
