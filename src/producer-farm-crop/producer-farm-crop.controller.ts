import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProducerFarmCropService } from './producer-farm-crop.service';
import { CreateProducerFarmCropDto } from './dto/create-producer-farm-crop.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Farm')
@Controller('producer')
export class ProducerFarmCropController {
  constructor(
    private readonly producerFarmCropService: ProducerFarmCropService,
  ) {}

  @Post(':idproducer/farm/:idfarm/crop')
  create(
    @Param('idproducer')
    idproducer: string,
    @Param('idfarm')
    idfarm: string,
    @Body() createProducerFarmCropDto: CreateProducerFarmCropDto,
  ) {
    return this.producerFarmCropService.create(
      +idproducer,
      +idfarm,
      createProducerFarmCropDto,
    );
  }

  @Get(':idproducer/farm/:idfarm/crop')
  findAll(
    @Param('idproducer')
    idproducer: string,
    @Param('idfarm')
    idfarm: string,
  ) {
    return this.producerFarmCropService.findAll(+idproducer, +idfarm);
  }

  @Delete(':idproducer/farm/:idfarm/crop/:idcrop')
  remove(
    @Param('idproducer')
    idproducer: string,
    @Param('idfarm')
    idfarm: string,
    @Param('idcrop')
    idcrop: string,
  ) {
    return this.producerFarmCropService.remove(+idproducer, +idfarm, +idcrop);
  }
}
