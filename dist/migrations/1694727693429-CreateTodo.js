"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodo1694727693429 = void 0;
class CreateTodo1694727693429 {
    constructor() {
        this.name = 'CreateTodo1694727693429';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "todo" (
        "id" SERIAL NOT NULL,
        "title" character varying NOT NULL,
        "description" text NOT NULL DEFAULT '',
        "icon" character varying NOT NULL DEFAULT '',
        "quantity" smallint NOT NULL DEFAULT '1',
        "weekDays" smallint[] NOT NULL DEFAULT '{0, 1, 2, 3, 4, 5, 6}',
        "time" varchar[] NOT NULL DEFAULT '{}',
        "visible" boolean NOT NULL DEFAULT 'true',
        "startedAt" character varying NOT NULL DEFAULT '',
        "endedAt" character varying NOT NULL DEFAULT '',
        "info" jsonb NOT NULL DEFAULT '{}',
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        "ownerId" integer NOT NULL,
        CONSTRAINT "PK_t275v4467523n6d37d8zx1638n8" PRIMARY KEY ("id"),
        CONSTRAINT "FK_34571t932678by8as6cj6qe8xy4" FOREIGN KEY ("ownerId")
          REFERENCES "user"("id")
          ON DELETE RESTRICT
          ON UPDATE NO ACTION
        )`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "FK_34571t932678by8as6cj6qe8xy4"`);
        await queryRunner.query(`DROP TABLE "todo"`);
    }
}
exports.CreateTodo1694727693429 = CreateTodo1694727693429;
//# sourceMappingURL=1694727693429-CreateTodo.js.map