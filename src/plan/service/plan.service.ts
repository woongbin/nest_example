import { Injectable } from '@nestjs/common';
import { PlanRepository } from '../repository/plan.repository';

@Injectable()
export class PlanService {
  constructor(private readonly planRepository: PlanRepository) {}

  async store(name: string, lessonSeconds: number) {
    return this.planRepository.store(name, lessonSeconds);
  }
}
