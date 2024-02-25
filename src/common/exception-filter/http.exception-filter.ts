import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const statusCode = exception.getStatus();

    //TODO 슬랙 전송
    //TODO 써드파티 전송

    response.status(statusCode).json({
      statusCode: statusCode,
      message: exception.message,
    });
  }
}
