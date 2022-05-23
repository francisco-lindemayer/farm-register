import { ApiProperty } from '@nestjs/swagger';

export class CreateProducerDto {
  @ApiProperty({
    description: 'CPF ou CNPJ',
    example: '99999999999 ou 44444444000144',
  })
  identitycode: string;

  @ApiProperty({
    description: 'Nome do produtor',
    example: 'John Doe',
  })
  name: string;
}
