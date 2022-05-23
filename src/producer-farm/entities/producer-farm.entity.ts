import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Producer } from 'src/producer/entities/producer.entity';

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

  @ManyToOne(() => Producer, (producer) => producer.farms)
  producer: Producer;
}
