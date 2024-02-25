import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  index() {
    return this.userService.getUsers();
  }

  @Post()
  store(@Body('name') name: string, @Body('phoneNumber') phoneNumber: string) {
    return this.userService.store(name, phoneNumber);
  }
}
