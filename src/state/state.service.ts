import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './entities/state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
  ) {}
  async findAll() {
    return await this.stateRepository.find({ loadEagerRelations: false });
  }

  async findOne(ibgecode: string) {
    console.log(ibgecode);
    return await this.stateRepository.findOne({
      where: { ibgecode: ibgecode },
      relations: ['districts'],
    });
  }
}
