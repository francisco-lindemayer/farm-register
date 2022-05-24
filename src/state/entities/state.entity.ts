import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class State {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ unique: true })
  ibgecode: string;

  @Column({ unique: true })
  uf: string;

  @Column()
  name: string;
}
