import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LessonService } from '../service/lesson.service';
import { LessonTypeEnum } from '../enum/lesson-type.enum';
import { AuthGuard } from '../../user/guard/auth-guard.service';

@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get('/:id')
  async getLesson(@Param('id', ParseIntPipe) id: number) {
    return await this.lessonService.getLesson(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  async store(
    @Request() request,
    @Body('lessonType', new DefaultValuePipe(LessonTypeEnum.AUDIO))
    lessonType: LessonTypeEnum,
  ) {
    const user = request.user;

    return this.lessonService.store(user, lessonType);
  }
}
