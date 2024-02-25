import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  index() {
    console.log(process.env['DB_PORT']);
  }
}
