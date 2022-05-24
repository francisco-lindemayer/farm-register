import { District } from 'src/district/entities/district.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => District, (district) => district.state)
  districts: District[];
}
