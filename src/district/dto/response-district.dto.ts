import { ApiProperty } from '@nestjs/swagger';

export class ResponseDistrictDto {
  @ApiProperty({
    description: 'Identificador do recurso',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Código IBGE',
    example: '4300034',
  })
  ibgecode: string;

  @ApiProperty({
    description: 'Nome do município por extenso',
    example: 'Aceguá',
  })
  name: string;
}
