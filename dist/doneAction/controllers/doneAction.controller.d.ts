import { User } from '../../user/user.entity';
import { DoneActionCreate } from '../dtos/doneAction-create.dto';
import { DoneAction } from '../entities/doneAction.entity';
import { DoneActionService } from '../services/doneAction.service';
export declare class DoneActionController {
    private readonly service;
    constructor(service: DoneActionService);
    createDoneAction(todoId: number, newDoneAction: DoneActionCreate, user: User): Promise<DoneAction>;
    listDoneAction(todoIds: number[], day: string, user: User): Promise<DoneAction[]>;
    removeDoneAction(doneAction: DoneAction): Promise<DoneAction>;
}
