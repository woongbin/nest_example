import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const UserDecorator = createParamDecorator(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    const user = request.user;
    if (!user) {
      throw new InternalServerErrorException('AuthGuard 필요');
    }

    return user;
  },
);
