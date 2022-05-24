import { Test, TestingModule } from '@nestjs/testing';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';
import { CreateProducerDto } from './dto/create-producer.dto';

const producersMock: CreateProducerDto[] = [
  {
    identitycode: '00432341432',
    name: 'John Doe',
  },
  {
    identitycode: '00432345144',
    name: 'Jane Doe',
  },
];

const producerMock: CreateProducerDto = {
  identitycode: '00432341432',
  name: 'John Doe',
};

describe('ProducerController', () => {
  let producerController: ProducerController;
  let producerService: ProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerController],
      providers: [
        ProducerService,
        {
          provide: ProducerService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((producer: CreateProducerDto) =>
                Promise.resolve({ id: '1', ...producer }),
              ),
          },
        },
      ],
    }).compile();

    producerController = module.get<ProducerController>(ProducerController);
    producerService = module.get<ProducerService>(ProducerService);
  });

  it('should be defined', () => {
    expect(producerController).toBeDefined();
  });

  describe('Create', () => {
    it('Should create a producer', async () => {
      const producer = await producerController.create(producerMock);
      expect(producer).toEqual({
        id: '1',
        ...producerMock,
      });
      expect(producerService.create).toHaveBeenCalledWith(producerMock);
    });
  });
});
