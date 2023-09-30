import { PipeTransform } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
export declare class ParseTodoPipe implements PipeTransform {
    private readonly todoService;
    constructor(todoService: TodoService);
    transform(value: number): Promise<import("../entities/todo.entity").Todo>;
}
