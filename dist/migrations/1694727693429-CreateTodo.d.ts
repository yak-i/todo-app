import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateTodo1694727693429 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
