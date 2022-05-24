import { Test, TestingModule } from '@nestjs/testing';
import { ProducerFarmCropController } from './producer-farm-crop.controller';
import { ProducerFarmCropService } from './producer-farm-crop.service';

describe('ProducerFarmCropController', () => {
  let controller: ProducerFarmCropController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerFarmCropController],
      providers: [ProducerFarmCropService],
    }).compile();

    controller = module.get<ProducerFarmCropController>(
      ProducerFarmCropController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
