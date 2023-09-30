"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = exports.dataSourceOptions = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const _1694463148117_CreateUser_1 = require("./migrations/1694463148117-CreateUser");
const _1694464555673_CreateSessionStorage_1 = require("./migrations/1694464555673-CreateSessionStorage");
const _1694727693429_CreateTodo_1 = require("./migrations/1694727693429-CreateTodo");
const _1695203573378_CreateDoneAction_1 = require("./migrations/1695203573378-CreateDoneAction");
const todo_entity_1 = require("./todo/entities/todo.entity");
const doneAction_entity_1 = require("./doneAction/entities/doneAction.entity");
const user_entity_1 = require("./user/user.entity");
exports.dataSourceOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [user_entity_1.User, todo_entity_1.Todo, doneAction_entity_1.DoneAction],
    migrations: [
        _1694463148117_CreateUser_1.CreateUser1694463148117,
        _1694464555673_CreateSessionStorage_1.CreateSessionStorage1694464555673,
        _1694727693429_CreateTodo_1.CreateTodo1694727693429,
        _1695203573378_CreateDoneAction_1.CreateDoneAction1695203573378,
    ],
    synchronize: true,
    extra: {
        ssl: process.env.SSL_MODE === 'require'
            ? {
                rejectUnauthorized: false,
            }
            : false,
    },
};
exports.appDataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
//# sourceMappingURL=data-source.js.map