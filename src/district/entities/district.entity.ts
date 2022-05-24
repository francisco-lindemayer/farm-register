import { ProducerFarm } from 'src/producer-farm/entities/producer-farm.entity';
import { State } from 'src/state/entities/state.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class District {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ unique: true })
  ibgecode: string;

  @Column()
  name: string;

  @ManyToOne(() => State, (state) => state.districts)
  state: State;

  @OneToMany(() => ProducerFarm, (producerfarm) => producerfarm.district)
  farms: ProducerFarm[];
}
