import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

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

  @Length(7)
  @ApiProperty({
    description: 'Código IBGE do município',
    example: '4300034',
  })
  ibgecode: string;
}
