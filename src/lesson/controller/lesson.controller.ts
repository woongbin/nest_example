import { Body, Controller, Post } from '@nestjs/common';
import { LessonService } from '../service/lesson.service';
import { LessonTypeEnum } from '../enum/lesson-type.enum';
import { UserService } from '../../user/service/user.service';

@Controller('lessons')
export class LessonController {
  constructor(
    private readonly lessonService: LessonService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async store(
    @Body('userId') userId: string,
    @Body('lessonType') lessonType: LessonTypeEnum,
  ) {
    const user = await this.userService.getUser(userId);

    return this.lessonService.store(user, lessonType);
  }
}
