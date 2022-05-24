import { ApiProperty } from '@nestjs/swagger';

export class ParamProducerFarmCropDto {
  @ApiProperty({
    description: 'Identificador do produtor',
    example: 1,
  })
  idproducer: number;

  @ApiProperty({
    description: 'Identificador da fazenda',
    example: 1,
  })
  idfarm: number;
}
