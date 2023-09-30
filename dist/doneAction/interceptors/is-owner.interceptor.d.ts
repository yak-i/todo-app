import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DoneAction } from '../entities/doneAction.entity';
export declare class IsOwnerInterceptor<T extends DoneAction | Array<DoneAction>> implements NestInterceptor<T, T> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<T>;
}
