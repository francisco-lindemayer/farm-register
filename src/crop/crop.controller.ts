import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CropService } from './crop.service';
import { ResponseCropDto } from './dto/response-crop.dto';

@ApiTags('Crop')
@Controller('crop')
export class CropController {
  constructor(private readonly cropService: CropService) {}

  @Get()
  @ApiOkResponse({ type: ResponseCropDto, isArray: true })
  findAll() {
    return this.cropService.findAll();
  }
}
