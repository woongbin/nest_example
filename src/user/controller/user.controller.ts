import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { PhoneNumberPipePipe } from '../pipe/phone-number-pipe.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  index() {
    return this.userService.getUsers();
  }

  @Post()
  store(
    @Body('name') name: string,
    @Body('phoneNumber', PhoneNumberPipePipe) phoneNumber: string,
  ) {
    return this.userService.store(name, phoneNumber);
  }
}
