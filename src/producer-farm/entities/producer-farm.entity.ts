import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Producer } from 'src/producer/entities/producer.entity';
import { Crop } from 'src/crop/entities/crop.entity';
import { District } from 'src/district/entities/district.entity';

@Entity()
export class ProducerFarm {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id?: number;

  @Column()
  name: string;

  @Column({ type: 'numeric' })
  totalarea: number;

  @Column({ type: 'numeric' })
  vegetationarea: number;

  @Column({ type: 'numeric' })
  farmedarea: number;

  @ManyToOne(() => District, (district) => district.farms, { nullable: false })
  district: District;

  @ManyToOne(() => Producer, (producer) => producer.farms)
  producer: Producer;

  @ManyToMany(() => Crop, (crop) => crop.id)
  @JoinTable()
  crops?: Crop[];
}
