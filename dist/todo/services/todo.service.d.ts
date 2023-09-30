import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';
import { TodoCreate } from '../dtos/todo-create.dto';
import { TodoUpdate } from '../dtos/todo-update.dto';
import { Todo } from '../entities/todo.entity';
export declare class TodoService {
    private readonly repo;
    constructor(repo: Repository<Todo>);
    createTodo(newTodo: TodoCreate): Promise<Todo>;
    listTodo(owner: User): Promise<Todo[]>;
    listVisibleTodo(day: string, owner: User): Promise<Todo[]>;
    getTodo(id: number): Promise<Todo>;
    updateTodo(todo: Todo, updates: TodoUpdate): Promise<Todo>;
    removeTodo(todo: Todo): Promise<Todo>;
}
