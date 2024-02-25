import { Injectable } from '@nestjs/common';
import { LessonRepository } from '../repository/lesson.repository';
import { LessonTypeEnum } from '../enum/lesson-type.enum';
import { UserEntity } from '../../user/entity/user.entity';

@Injectable()
export class LessonService {
  constructor(private readonly lessonRepository: LessonRepository) {}

  async store(user: UserEntity, lessonType: LessonTypeEnum) {
    return this.lessonRepository.store(user, lessonType);
  }
}
