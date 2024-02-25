import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LessonService } from '../service/lesson.service';
import { LessonTypeEnum } from '../enum/lesson-type.enum';
import { AuthGuard } from '../../user/guard/auth-guard.service';
import { UserDecorator } from '../../user/decorator/user.decorator';
import { UserEntity } from '../../user/entity/user.entity';

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
    @UserDecorator() user: UserEntity,
    @Body('lessonType', new DefaultValuePipe(LessonTypeEnum.AUDIO))
    lessonType: LessonTypeEnum,
  ) {
    return this.lessonService.store(user, lessonType);
  }
}
