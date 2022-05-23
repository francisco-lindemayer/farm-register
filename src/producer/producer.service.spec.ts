import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProducerFarm } from 'src/producer-farm/entities/producer-farm.entity';
import { ProducerFarmService } from 'src/producer-farm/producer-farm.service';
import { Repository } from 'typeorm';
import { CreateProducerDto } from './dto/create-producer.dto';
import { ResponseProducerDto } from './dto/response-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { Producer } from './entities/producer.entity';
import { ProducerService } from './producer.service';

const producersListMock: Producer[] = [
  {
    id: 1,
    identitycode: '00432341432',
    name: 'John Doe',
  },
  {
    id: 2,
    identitycode: '00432345144',
    name: 'Jane Doe',
  },
];

const producerSingleMock: Producer = {
  identitycode: '00432341432',
  name: 'John Doe',
};

describe('ProducerService', () => {
  let service: ProducerService;
  let repository: Repository<Producer>;
  let farmRepository: Repository<ProducerFarm>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProducerFarmService,
        ProducerService,
        {
          provide: getRepositoryToken(Producer),
          useValue: {
            save: jest
              .fn()
              .mockImplementation((producer: CreateProducerDto) => {
                const newProducer: ResponseProducerDto = {
                  id: producersListMock.length + 1,
                  ...producer,
                };

                producersListMock.push(newProducer);

                return Promise.resolve(newProducer);
              }),
            update: jest
              .fn()
              .mockImplementation(
                (id: number, updateProducerDto: UpdateProducerDto) => {
                  const producer = repository.findOne(id);

                  return Promise.resolve({
                    name: updateProducerDto.name,
                    ...producer,
                  });
                },
              ),
            find: jest.fn().mockResolvedValue(producersListMock),
            findOne: jest.fn().mockImplementation((id: number) => {
              const producer = producersListMock.find(
                (producer) => producer.id == id,
              );
              return Promise.resolve(producer);
            }),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(ProducerFarm),
          useValue: {
            save: jest.fn(),
            update: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProducerService>(ProducerService);
    repository = module.get<Repository<Producer>>(getRepositoryToken(Producer));
    farmRepository = module.get<Repository<ProducerFarm>>(
      getRepositoryToken(ProducerFarm),
    );
  });

  it('should be ProducerService defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should successfully insert a producer', async () => {
      const producer = await service.create(producerSingleMock);

      expect(producer).toHaveProperty('id');
      expect(producer).toHaveProperty('identitycode');
      expect(producer).toHaveProperty('name');
      expect(producer.identitycode).toEqual(producerSingleMock.identitycode);
      expect(producer.name).toEqual(producerSingleMock.name);
    });

    it('should successfully insert a producer', async () => {
      const producer = await service.create(producerSingleMock);

      expect(producer).toHaveProperty('id');
      expect(producer).toHaveProperty('identitycode');
      expect(producer).toHaveProperty('name');
      expect(producer.identitycode).toEqual(producerSingleMock.identitycode);
      expect(producer.name).toEqual(producerSingleMock.name);
    });
  });

  describe('find all', () => {
    it('should return all producers', async () => {
      const producers = await service.findAll();

      expect(producers).toEqual(producersListMock);
      expect(repository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('find one', () => {
    it('should return one specific producer', async () => {
      const producerToFind = producersListMock[0];
      const producer = await service.findOne(producerToFind.id);

      expect(producer).toEqual(producerToFind);
      expect(repository.findOne).toHaveBeenCalledWith(producerToFind.id);
    });

    it('should return no producer', async () => {
      const producerId = producersListMock.length + 1;

      const producer = await service.findOne(producerId);

      expect(producer).toBeUndefined();
      expect(repository.findOne).toHaveBeenCalledWith(producerId);
    });
  });
});
