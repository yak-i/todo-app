import { User } from '../../user/user.entity';
export declare class DoneActionCreate {
    readonly day: string;
    owner: User;
    todo: number;
}
