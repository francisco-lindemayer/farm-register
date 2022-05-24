import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { District } from 'src/district/entities/district.entity';
import { Producer } from 'src/producer/entities/producer.entity';
import { Repository } from 'typeorm';
import { CreateProducerFarmDto } from './dto/create-producer-farm.dto';
import { UpdateProducerFarmDto } from './dto/update-producer-farm.dto';
import { ProducerFarm } from './entities/producer-farm.entity';

@Injectable()
export class ProducerFarmService {
  constructor(
    @InjectRepository(ProducerFarm)
    private readonly producerFarmRepository: Repository<ProducerFarm>,
    @InjectRepository(Producer)
    private readonly producerRepository: Repository<Producer>,
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
  ) {}

  async create(
    idproducer: number,
    createProducerFarmDto: CreateProducerFarmDto,
  ) {
    const producer = await this.producerRepository.findOne(idproducer);
    const farm = await this.producerFarmRepository.create(
      createProducerFarmDto,
    );

    farm.producer = producer;
    return await this.producerFarmRepository.save(farm);
  }

  async findAll(idproducer: number) {
    return await this.producerFarmRepository.find({
      where: {
        producer: { id: idproducer },
      },
      relations: ['district', 'district.state'],
    });
  }

  async findOne(idproducer: number, id: number) {
    const farm = await this.producerFarmRepository.findOne(id, {
      relations: ['district', 'district.state', 'crops', 'producer'],
    });

    if (+farm.producer.id !== +idproducer)
      throw new NotFoundException('Fazenda não localizada');

    delete farm.producer;

    return farm;
  }

  async update(
    idproducer: number,
    id: number,
    updateProducerFarmDto: UpdateProducerFarmDto,
  ) {
    await this.findOne(idproducer, id);

    const { name, farmedarea, totalarea, vegetationarea } =
      updateProducerFarmDto;

    return await this.producerFarmRepository.update(id, {
      name,
      farmedarea,
      totalarea,
      vegetationarea,
    });
  }

  async remove(idproducer: number, id: number) {
    await this.findOne(idproducer, id);
    return await this.producerFarmRepository.delete(id);
  }
}
