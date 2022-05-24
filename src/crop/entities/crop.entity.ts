import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProducerFarm } from 'src/producer-farm/entities/producer-farm.entity';

@Entity()
export class Crop {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  code: string;

  @ManyToMany(() => ProducerFarm, (farm) => farm.crops)
  farms: ProducerFarm[];
}
