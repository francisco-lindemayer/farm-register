import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { Producer } from './entities/producer.entity';

@Injectable()
export class ProducerService {
  constructor(
    @InjectRepository(Producer)
    private readonly producerRepository: Repository<Producer>,
  ) {}

  async create(createProducerDto: CreateProducerDto) {
    return await this.producerRepository.save(createProducerDto);
  }

  async findAll() {
    return await this.producerRepository.find();
  }

  async findOne(id: number) {
    const producer = await this.producerRepository.findOne(id);

    if (!producer) throw new NotFoundException('Produtor não localizado');

    return producer;
  }

  async update(id: number, updateProducerDto: UpdateProducerDto) {
    const producer = await this.findOne(id);
    producer.name = updateProducerDto.name;

    await this.producerRepository.update(id, producer);

    return producer;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.producerRepository.delete(id);
  }
}
