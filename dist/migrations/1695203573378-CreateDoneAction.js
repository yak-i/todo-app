"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDoneAction1695203573378 = void 0;
class CreateDoneAction1695203573378 {
    constructor() {
        this.name = 'CreateDoneAction1695203573378';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "done_action" (
          "id" SERIAL NOT NULL,
          "day" character varying NOT NULL DEFAULT '',
          "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
          "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
          "todoId" integer NOT NULL,
          "ownerId" integer NOT NULL,
          CONSTRAINT "PK_t710v3762460n6d37d8zx1638n8" PRIMARY KEY ("id"),
          CONSTRAINT "FK_95620t349638by8as6cj6qe8xy4" FOREIGN KEY ("todoId")
            REFERENCES "todo"("id")
            ON DELETE RESTRICT
            ON UPDATE NO ACTION,
          CONSTRAINT "FK_62064t048294by8as6cj6qe8xy4" FOREIGN KEY ("ownerId")
            REFERENCES "user"("id")
            ON DELETE RESTRICT
            ON UPDATE NO ACTION
          )`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "done_action" DROP CONSTRAINT "FK_95620t349638by8as6cj6qe8xy4"`);
        await queryRunner.query(`ALTER TABLE "done_action" DROP CONSTRAINT "FK_62064t048294by8as6cj6qe8xy4"`);
        await queryRunner.query(`DROP TABLE "done_action"`);
    }
}
exports.CreateDoneAction1695203573378 = CreateDoneAction1695203573378;
//# sourceMappingURL=1695203573378-CreateDoneAction.js.map