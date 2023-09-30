import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Todo } from '../entities/todo.entity';
export declare class IsOwnerInterceptor<T extends Todo | Array<Todo>> implements NestInterceptor<T, T> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<T>;
}
