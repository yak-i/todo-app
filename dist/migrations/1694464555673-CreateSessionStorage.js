"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionStorage1694464555673 = void 0;
class CreateSessionStorage1694464555673 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "session" (
        "sid" varchar NOT NULL COLLATE "default",
        "sess" json NOT NULL,
        "expire" timestamp(6) NOT NULL
      )
      WITH (OIDS=FALSE)`);
        await queryRunner.query(`ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE`);
        await queryRunner.query(`CREATE INDEX "IDX_session_expire" ON "session" ("expire")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "session"`);
    }
}
exports.CreateSessionStorage1694464555673 = CreateSessionStorage1694464555673;
//# sourceMappingURL=1694464555673-CreateSessionStorage.js.map