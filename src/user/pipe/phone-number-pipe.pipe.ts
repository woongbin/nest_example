import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PhoneNumberPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value.startsWith('010')) {
      throw new BadRequestException('핸드폰 번호를 정확히 입력하세요.');
    }

    return value;
  }
}
