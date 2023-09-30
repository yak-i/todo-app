import { ValidatorConstraintInterface } from 'class-validator';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class IsUserAlreadyExist implements ValidatorConstraintInterface {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validate(email: string): Promise<boolean>;
    defaultMessage(): string;
}
