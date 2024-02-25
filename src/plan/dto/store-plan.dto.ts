import { IsNumberString, IsString } from 'class-validator';

export class StorePlanDto {
  @IsString()
  name: string;

  @IsNumberString()
  lessonSeconds: number;
}
