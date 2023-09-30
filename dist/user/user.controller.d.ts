import { UserService } from './user.service';
import { UserUpdate } from './dto/user-update.dto';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    get(id: number): Promise<User>;
    update(id: number, updatesUser: UserUpdate): Promise<User>;
}
