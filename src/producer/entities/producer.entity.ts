import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identitycode: string;

  @Column()
  name: string;
}
