import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadGatewayException,
} from '@nestjs/common'
import { catchError, Observable, throwError } from 'rxjs'
import { tap, map } from 'rxjs/operators'
export interface Response<T> {
  data: T
  message: string
}

@Injectable()
export class GlobalInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(async response => {
        const res = context.switchToHttp().getResponse()
        let _data = response.data
        let _message = response.message ? response.message : '请求成功'
        let _code = response.code != res.statusCode && response.code ? response.code : res.statusCode

        res.status(_code)
        res.header('Content-Type', 'text/json')
        return {
          data: _data,
          message: _message,
          statusCode: _code,
        }
      }),
      catchError(err => throwError(new BadGatewayException())),
    )
  }
}
