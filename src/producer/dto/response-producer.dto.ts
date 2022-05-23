import { ApiProperty } from '@nestjs/swagger';

export class ResponseProducerDto {
  @ApiProperty({
    description: 'Identificador do recurso',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'CPF ou CNPJ',
    example: '99999999999 ou 44444444000144',
  })
  identitycode: string;

  @ApiProperty({
    description: 'Nome do produtor',
    example: 'Fazenda John Doe',
  })
  name: string;
}
