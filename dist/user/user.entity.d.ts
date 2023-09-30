export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(data?: Partial<User>);
    hashPassword(): Promise<void>;
    checkPassword(plainPassword: string): Promise<boolean>;
}
