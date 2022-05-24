import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class CreateStateDto {
  @Length(2)
  @ApiProperty({
    description: 'Código IBGE',
    example: '43',
  })
  ibgecode: string;

  @Length(2)
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
