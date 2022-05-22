import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producer } from './entities/producer.entity';
import { ProducerService } from './producer.service';

const producersMock: Producer[] = [
  {
    identitycode: '00432341432',
    name: 'John Doe',
  },
  {
    identitycode: '00432345144',
    name: 'Jane Doe',
  },
];

const producerMock: Producer = {
  identitycode: '00432341432',
  name: 'John Doe',
};

describe('ProducerService', () => {
  let service: ProducerService;
  let repository: Repository<Producer>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProducerService,
        {
          provide: getRepositoryToken(Producer),
          useValue: {
            save: jest.fn().mockResolvedValue(producerMock),
          },
        },
      ],
    }).compile();

    service = module.get<ProducerService>(ProducerService);
    repository = module.get<Repository<Producer>>(getRepositoryToken(Producer));
  });

  it('should be ProducerService defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should successfully insert a producer', async () => {
      const resolve = await service.create({
        identitycode: '00432341432',
        name: 'John Doe',
      });

      expect(resolve).toEqual(producerMock);
    });
  });
});
