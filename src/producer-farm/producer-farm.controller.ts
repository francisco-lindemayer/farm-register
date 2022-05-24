import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProducerFarmService } from './producer-farm.service';
import { CreateProducerFarmDto } from './dto/create-producer-farm.dto';
import { UpdateProducerFarmDto } from './dto/update-producer-farm.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseProducerFarmDto } from './dto/response-producerfarm.dto';

@ApiTags('Farm')
@Controller('producer')
export class ProducerFarmController {
  constructor(private readonly producerFarmService: ProducerFarmService) {}

  @Post(':idproducer/farm')
  @ApiCreatedResponse({ type: ResponseProducerFarmDto })
  create(
    @Param('idproducer')
    idproducer: string,
    @Body()
    createProducerFarmDto: CreateProducerFarmDto,
  ) {
    return this.producerFarmService.create(+idproducer, createProducerFarmDto);
  }

  @Get(':idproducer/farm')
  @ApiOkResponse({ type: ResponseProducerFarmDto, isArray: true })
  findAll(
    @Param('idproducer')
    idproducer: string,
  ) {
    return this.producerFarmService.findAll(+idproducer);
  }

  @Get(':idproducer/farm/:idfarm')
  @ApiOkResponse({ type: ResponseProducerFarmDto })
  findOne(
    @Param('idproducer')
    idproducer: string,
    @Param('idfarm')
    idfarm: string,
  ) {
    return this.producerFarmService.findOne(+idproducer, +idfarm);
  }

  @Patch(':idproducer/farm/:idfarm')
  @ApiCreatedResponse({ type: ResponseProducerFarmDto })
  update(
    @Param('idproducer')
    idproducer: string,
    @Param('idfarm')
    idfarm: string,
    @Body() updateProducerFarmDto: UpdateProducerFarmDto,
  ) {
    return this.producerFarmService.update(
      +idproducer,
      +idfarm,
      updateProducerFarmDto,
    );
  }

  @Delete(':idproducer/farm/:idfarm')
  @ApiNoContentResponse()
  remove(
    @Param('idproducer')
    idproducer: string,
    @Param('idfarm')
    idfarm: string,
  ) {
    return this.producerFarmService.remove(+idproducer, +idfarm);
  }
}
