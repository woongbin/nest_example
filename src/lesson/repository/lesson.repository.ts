import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonEntity } from '../entity/lesson.entity';
import { LessonTypeEnum } from '../enum/lesson-type.enum';
import { UserEntity } from '../../user/entity/user.entity';

@Injectable()
export class LessonRepository {
  constructor(
    @InjectRepository(LessonEntity)
    private readonly repository: Repository<LessonEntity>,
  ) {}

  async store(user: UserEntity, lessonType: LessonTypeEnum) {
    return await this.repository.save({
      user: user,
      type: lessonType,
    });
  }
}
