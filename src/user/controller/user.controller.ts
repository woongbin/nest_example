import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { PhoneNumberPipePipe } from '../pipe/phone-number-pipe.pipe';
import { LogInterceptor } from '../../common/interceptor/log.interceptor';
import { TransactionInterceptor } from '../../common/interceptor/transaction.interceptor';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseInterceptors(LogInterceptor)
  index() {
    throw new InternalServerErrorException('hi');

    return this.userService.getUsers();
  }

  @Post()
  @UseInterceptors(TransactionInterceptor)
  store(
    @Body('name') name: string,
    @Body('phoneNumber', PhoneNumberPipePipe) phoneNumber: string,
  ) {
    return this.userService.store(name, phoneNumber);
  }
}
