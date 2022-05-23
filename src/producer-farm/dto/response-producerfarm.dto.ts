import { ApiProperty } from '@nestjs/swagger';

export class ResponseProducerFarmDto {
  @ApiProperty({
    description: 'Identificador do recurso',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nome da Fazenda',
    example: 'Fazenda John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'Area total da fazenda em hectares',
    example: '10',
  })
  totalarea: number;

  @ApiProperty({
    description: 'Area de vegetação da fazenda em hectares',
    example: '3',
  })
  vegetationarea: number;

  @ApiProperty({
    description: 'Area  da fazenda em hectares',
    example: '7',
  })
  farmedarea: number;
}
