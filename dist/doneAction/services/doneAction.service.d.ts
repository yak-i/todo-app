import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';
import { DoneActionCreate } from '../dtos/doneAction-create.dto';
import { DoneAction } from '../entities/doneAction.entity';
export declare class DoneActionService {
    private readonly repo;
    constructor(repo: Repository<DoneAction>);
    createDoneAction(newDoneAction: DoneActionCreate): Promise<DoneAction>;
    listDoneAction(todoIds: number[], day: string, owner: User): Promise<DoneAction[]>;
    getDoneAction(id: number): Promise<DoneAction>;
    removeDoneAction(doneAction: DoneAction): Promise<DoneAction>;
}
