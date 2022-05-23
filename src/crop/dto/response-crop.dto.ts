import { ApiProperty } from '@nestjs/swagger';
import {} from 'class-validator';

export class CreateCropDto {
  @ApiProperty({
    description: 'Identificador do recurso',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nome da cultura plantável',
    example: 'Soja',
  })
  name: string;

  @ApiProperty({
    description: 'Descrição da cultura plantável',
    example:
      'A soja, também conhecida como feijão-soja e feijão-chinês, é uma planta pertence à família Fabaceae',
  })
  description: string;
}
