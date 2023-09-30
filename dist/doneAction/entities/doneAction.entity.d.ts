import { User } from '../../user/user.entity';
import { Todo } from 'src/todo/entities/todo.entity';
export declare class DoneAction {
    id: number;
    day: string;
    owner: User | number;
    todo: Todo | number;
    createdAt: Date;
    updatedAt: Date;
}
