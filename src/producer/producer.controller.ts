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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseProducerDto } from './dto/response-producer.dto';

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
  findOne(@Param('id') id: string) {
    return this.producerService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ResponseProducerDto })
  update(
    @Param('id') id: string,
    @Body() updateProducerDto: UpdateProducerDto,
  ) {
    return this.producerService.update(+id, updateProducerDto);
  }

  @Delete(':id')
  @ApiNoContentResponse()
  remove(@Param('id') id: string) {
    return this.producerService.remove(+id);
  }
}
