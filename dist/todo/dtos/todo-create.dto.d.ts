import { User } from '../../user/user.entity';
export declare class TodoCreate {
    readonly title: string;
    readonly description?: string;
    readonly icon?: string;
    readonly quantity?: number;
    readonly visible?: boolean;
    readonly weekDays?: number[];
    readonly time?: string[];
    readonly startedAt?: string;
    readonly endedAt?: string;
    readonly info?: Record<string, any>;
    owner: User;
}
