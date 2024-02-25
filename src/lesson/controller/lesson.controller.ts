import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LessonService } from '../service/lesson.service';
import { LessonTypeEnum } from '../enum/lesson-type.enum';
import { UserService } from '../../user/service/user.service';

@Controller('lessons')
export class LessonController {
  constructor(
    private readonly lessonService: LessonService,
    private readonly userService: UserService,
  ) {}

  @Get('/:id')
  async getLesson(@Param('id', ParseIntPipe) id: number) {
    return await this.lessonService.getLesson(id);
  }

  @Post()
  async store(
    @Body('userId') userId: string,
    @Body('lessonType', new DefaultValuePipe(LessonTypeEnum.AUDIO))
    lessonType: LessonTypeEnum,
  ) {
    const user = await this.userService.getUser(userId);

    return this.lessonService.store(user, lessonType);
  }
}
