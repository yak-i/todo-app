import { User } from '../../user/user.entity';
export declare class Todo {
    id: number;
    title: string;
    description: string;
    icon: string;
    quantity: number;
    weekDays: number[];
    time: string[];
    visible: boolean;
    startedAt: string;
    endedAt: string;
    info: Record<string, any>;
    owner: User | number;
    createdAt: Date;
    updatedAt: Date;
}
