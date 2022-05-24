import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProducerFarm } from 'src/producer-farm/entities/producer-farm.entity';

@Entity()
export class Producer {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id?: number;

  @Column({ type: 'varchar', length: 14 })
  identitycode: string;

  @Column()
  name: string;

  @OneToMany(() => ProducerFarm, (producerfarm) => producerfarm.producer)
  farms?: ProducerFarm[];
}
