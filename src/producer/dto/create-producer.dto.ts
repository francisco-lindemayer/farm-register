import { ApiProperty } from '@nestjs/swagger';

export class CreateProducerDto {
  @ApiProperty({
    description: 'CPF ou CNPJ',
    example: '999.999.999-99 ou 44.444.444/0001-44',
  })
  identitycode: string;

  @ApiProperty({
    description: 'Nome do produtor',
    example: 'Fazenda John Doe',
  })
  name: string;
}
