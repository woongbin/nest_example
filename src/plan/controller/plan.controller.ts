import { Body, Controller, Post } from '@nestjs/common';
import { PlanService } from '../service/plan.service';
import { StorePlanDto } from '../dto/store-plan.dto';

@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Post()
  async store(@Body() storePlanDto: StorePlanDto) {
    return await this.planService.store(
      storePlanDto.name,
      storePlanDto.lessonSeconds,
    );
  }
}
