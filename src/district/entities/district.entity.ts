import { State } from 'src/state/entities/state.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class District {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ unique: true })
  ibgecode: string;

  @Column()
  name: string;

  @ManyToOne(() => State, (state) => state.districts)
  states: State[];
}
