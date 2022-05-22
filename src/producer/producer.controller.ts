import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProducerService } from './producer.service';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ResponseProducerDto } from './dto/response-producer.dto';
import { ParamProducerDto } from './dto/param-producer.dto';

@ApiTags('Producer')
@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post()
  @ApiCreatedResponse({ type: ResponseProducerDto })
  create(@Body() createProducerDto: CreateProducerDto) {
    return this.producerService.create(createProducerDto);
  }

  @Get()
  @ApiOkResponse({ type: ResponseProducerDto, isArray: true })
  findAll() {
    return this.producerService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseProducerDto })
  findOne(@Param('id') id: ParamProducerDto) {
    return this.producerService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ResponseProducerDto })
  update(
    @Param('id') id: ParamProducerDto,
    @Body() updateProducerDto: UpdateProducerDto,
  ) {
    return this.producerService.update(+id, updateProducerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ParamProducerDto) {
    return this.producerService.remove(+id);
  }
}
