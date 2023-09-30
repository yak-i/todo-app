"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1694463148117 = void 0;
class CreateUser1694463148117 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" (
          "id" SERIAL NOT NULL,
          "name" character varying NOT NULL,
          "email" character varying NOT NULL,
          "password" character varying NOT NULL,
          "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
          "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
          CONSTRAINT "UQ_b94714byf3x7d13o6k3g3960t19" UNIQUE ("email"),
          CONSTRAINT "PK_lemg7a022by8c9953td19436836" PRIMARY KEY ("id")
        )`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.CreateUser1694463148117 = CreateUser1694463148117;
//# sourceMappingURL=1694463148117-CreateUser.js.map