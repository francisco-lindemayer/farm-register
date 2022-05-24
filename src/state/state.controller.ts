import { Controller, Get, Param } from '@nestjs/common';
import { StateService } from './state.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ResponseStateDto } from './dto/response-state.dto';

@ApiTags('State')
@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  @ApiOkResponse({ type: ResponseStateDto, isArray: true })
  findAll() {
    return this.stateService.findAll();
  }

  @Get(':ibgecode/districts')
  @ApiOkResponse()
  findOne(
    @Param('ibgecode')
    ibgecode: string,
  ) {
    return this.stateService.findOne(ibgecode);
  }
}
