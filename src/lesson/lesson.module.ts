import { Module } from '@nestjs/common';
import { LessonService } from './service/lesson.service';
import { LessonController } from './controller/lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './entity/lesson.entity';
import { LessonRepository } from './repository/lesson.repository';
import { UserService } from '../user/service/user.service';
import { UserRepository } from '../user/repository/user.repository';
import { UserEntity } from '../user/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonEntity, UserEntity])],
  controllers: [LessonController],
  providers: [LessonService, LessonRepository, UserService, UserRepository],
})
export class LessonModule {}
