import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const request = context.switchToHttp().getRequest();

    const now = new Date();

    console.log(
      `[REQUEST] ${request.originalUrl}, ${now.toLocaleString('kr')}`,
    );

    return next.handle().pipe(
      tap(() => {
        const finishAt = new Date();

        console.log(
          `[RESPONSE] ${request.originalUrl}, ${finishAt.toLocaleString('kr')} ${finishAt.getMilliseconds() - now.getMilliseconds()}ms`,
        );
      }),
    );
  }
}
