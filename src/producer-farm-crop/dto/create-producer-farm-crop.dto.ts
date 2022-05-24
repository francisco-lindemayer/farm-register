import { ApiProperty } from '@nestjs/swagger';

export class CreateProducerFarmCropDto {
  @ApiProperty({
    description: 'Identificador da cultura',
    example: 1,
  })
  idcrop: number;
}
