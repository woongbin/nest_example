import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const userId = request.headers['authorization'];
    if (!userId) {
      throw new UnauthorizedException('userId 없음');
    }

    const user = await this.userService.getUser(userId);
    if (!user) {
      throw new UnauthorizedException('user 없음');
    }

    request.user = user;

    return true;
  }
}
