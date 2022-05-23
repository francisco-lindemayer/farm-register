import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

export class CreateProducerDto {
  @MinLength(11)
  @MaxLength(14)
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
