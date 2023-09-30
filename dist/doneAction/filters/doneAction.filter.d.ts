import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm';
export declare class DoneActionFilter implements ExceptionFilter<EntityNotFoundError> {
    catch(_: EntityNotFoundError, host: ArgumentsHost): void;
}
