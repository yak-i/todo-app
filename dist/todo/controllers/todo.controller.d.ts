import { User } from '../../user/user.entity';
import { TodoCreate } from '../dtos/todo-create.dto';
import { TodoUpdate } from '../dtos/todo-update.dto';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';
export declare class TodoController {
    private readonly service;
    constructor(service: TodoService);
    createTodo(newTodo: TodoCreate, user: User): Promise<Todo>;
    listTodo(user: User): Promise<Todo[]>;
    listVisibleTodo(day: string, user: User): Promise<Todo[]>;
    getTodo(id: number): Promise<Todo>;
    updateTodo(todo: Todo, updates: TodoUpdate): Promise<Todo>;
    removeTodo(todo: Todo): Promise<Todo>;
}
