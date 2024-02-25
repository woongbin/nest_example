import { Body, Controller, Post } from '@nestjs/common';
import { PlanService } from '../service/plan.service';

@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Post()
  async store(@Body('name') name: string) {
    return await this.planService.store(name);
  }
}
