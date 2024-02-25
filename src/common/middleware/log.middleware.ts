import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void): any {
    console.log(`[REQUEST] ${req.url} ${new Date().toLocaleDateString('kr')}`);

    return next;
  }
}
