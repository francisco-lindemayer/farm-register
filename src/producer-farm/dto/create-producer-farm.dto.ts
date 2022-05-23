import { ApiProperty } from '@nestjs/swagger';

export class CreateProducerFarmDto {
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
    description: 'Area agricultável da fazenda em hectares',
    example: '7',
  })
  farmedarea: number;
}
