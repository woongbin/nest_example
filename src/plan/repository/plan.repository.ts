import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanEntity } from '../entity/plan.entity';
import { ulid } from 'ulid';

@Injectable()
export class PlanRepository {
  constructor(
    @InjectRepository(PlanEntity)
    private readonly repository: Repository<PlanEntity>,
  ) {}

  async store(name: string, lessonSeconds: number) {
    const plan = this.repository.create({
      name,
      lessonSeconds,
    });

    plan.id = ulid();

    return await this.repository.save(plan);
  }
}
