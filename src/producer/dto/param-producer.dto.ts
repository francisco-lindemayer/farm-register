import { ApiProperty } from '@nestjs/swagger';

export class ParamProducerDto {
  @ApiProperty({
    description: 'Identificador do recurso',
    example: 1,
  })
  id: number;
}
