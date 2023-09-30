import { PipeTransform } from '@nestjs/common';
import { DoneActionService } from '../services/doneAction.service';
export declare class ParseDoneActionPipe implements PipeTransform {
    private readonly doneActionService;
    constructor(doneActionService: DoneActionService);
    transform(value: number): Promise<import("../entities/doneAction.entity").DoneAction>;
}
