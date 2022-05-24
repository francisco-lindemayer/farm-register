import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crop } from 'src/crop/entities/crop.entity';
import { ProducerFarm } from 'src/producer-farm/entities/producer-farm.entity';
import { Repository } from 'typeorm';
import { CreateProducerFarmCropDto } from './dto/create-producer-farm-crop.dto';

@Injectable()
export class ProducerFarmCropService {
  constructor(
    @InjectRepository(Crop)
    private readonly cropRepository: Repository<Crop>,
    @InjectRepository(ProducerFarm)
    private readonly producerFarmRepository: Repository<ProducerFarm>,
  ) {}

  async create(
    idproducer: number,
    idfarm: number,
    createProducerFarmCropDto: CreateProducerFarmCropDto,
  ) {
    const { idcrop } = createProducerFarmCropDto;
    const farm = await this.findFarmOrFail(idproducer, idfarm);
    const crop = await this.cropRepository.findOne(idcrop);

    if (!crop) throw new NotFoundException('Cultivo não localizado');

    farm.crops = farm.crops.filter((farmCrop) => farmCrop.id !== crop.id);
    farm.crops.push(crop);

    return await this.producerFarmRepository.save(farm);
  }

  async findAll(idproducer: number, idfarm: number) {
    const farm = await this.findFarmOrFail(idproducer, idfarm);

    return farm.crops;
  }

  async remove(idproducer: number, idfarm: number, idcrop: number) {
    const farm = await this.findFarmOrFail(idproducer, idfarm);
    const crops = farm.crops.filter((crop) => +crop.id !== +idcrop);

    farm.crops = crops;

    return await this.producerFarmRepository.save(farm);
  }

  async findFarmOrFail(idproducer: number, idfarm: number) {
    const farm = await this.producerFarmRepository.findOne(idfarm, {
      relations: ['producer', 'crops'],
    });

    if (!farm || +farm.producer.id !== +idproducer)
      throw new NotFoundException('Fazenda não localizada');

    return farm;
  }
}
