import { ApiProperty } from '@nestjs/swagger';

export class UpdateProducerDto {
  @ApiProperty({
    description: 'Nome do produtor',
    example: 'Fazenda John Doe',
  })
  name: string;
}
