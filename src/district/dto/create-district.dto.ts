import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class CreateDistrictDto {
  @Length(7)
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
