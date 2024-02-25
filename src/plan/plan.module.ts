import { Module } from '@nestjs/common';
import { PlanService } from './service/plan.service';
import { PlanController } from './controller/plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanEntity } from './entity/plan.entity';
import { PlanRepository } from './repository/plan.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PlanEntity])],
  controllers: [PlanController],
  providers: [PlanService, PlanRepository],
})
export class PlanModule {}
