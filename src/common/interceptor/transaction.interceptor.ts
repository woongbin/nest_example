import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, tap } from 'rxjs';
import { DataSource } from 'typeorm';

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  constructor(private readonly dateSource: DataSource) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const queryRunner = this.dateSource.createQueryRunner();

    const request = context.switchToHttp().getRequest();
    request.queryRunner = queryRunner;

    await queryRunner.connect();
    await queryRunner.startTransaction();

    return next.handle().pipe(
      tap(async () => {
        await queryRunner.commitTransaction();
        await queryRunner.release();
      }),
      catchError(async (e) => {
        await queryRunner.rollbackTransaction();
        await queryRunner.release();

        throw e;
      }),
    );
  }
}
