import { ApiProperty } from '@nestjs/swagger';

export class ResponseStateDto {
  @ApiProperty({
    description: 'Identificador do recurso',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Código IBGE',
    example: '43',
  })
  ibgecode: string;

  @ApiProperty({
    description: 'Sigla do estado',
    example: 'RS',
  })
  uf: string;

  @ApiProperty({
    description: 'Nome do estado por extenso',
    example: 'Rio Grande do Sul',
  })
  name: string;
}
