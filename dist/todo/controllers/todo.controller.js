"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const session_auth_guard_1 = require("../../auth/guards/session-auth.guard");
const user_decorator_1 = require("../../user/user.decorator");
const user_entity_1 = require("../../user/user.entity");
const todo_create_dto_1 = require("../dtos/todo-create.dto");
const todo_update_dto_1 = require("../dtos/todo-update.dto");
const todo_entity_1 = require("../entities/todo.entity");
const todo_filter_1 = require("../filters/todo.filter");
const is_owner_interceptor_1 = require("../interceptors/is-owner.interceptor");
const parse_todo_pipe_1 = require("../pipes/parse-todo.pipe");
const todo_service_1 = require("../services/todo.service");
let TodoController = class TodoController {
    constructor(service) {
        this.service = service;
    }
    createTodo(newTodo, user) {
        newTodo.owner = user;
        return this.service.createTodo(newTodo);
    }
    listTodo(user) {
        return this.service.listTodo(user);
    }
    listVisibleTodo(day, user) {
        return this.service.listVisibleTodo(day, user);
    }
    getTodo(id) {
        return this.service.getTodo(id);
    }
    updateTodo(todo, updates) {
        return this.service.updateTodo(todo, updates);
    }
    removeTodo(todo) {
        return this.service.removeTodo(todo);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_create_dto_1.TodoCreate,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "listTodo", null);
__decorate([
    (0, common_1.Get)('active'),
    __param(0, (0, common_1.Query)('day')),
    __param(1, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "listVisibleTodo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe, parse_todo_pipe_1.ParseTodoPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_entity_1.Todo,
        todo_update_dto_1.TodoUpdate]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateTodo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe, parse_todo_pipe_1.ParseTodoPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_entity_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "removeTodo", null);
TodoController = __decorate([
    (0, common_1.Controller)('todo'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, jwt_auth_guard_1.JWTAuthGuard),
    (0, common_1.UseFilters)(todo_filter_1.TodoFilter),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor, is_owner_interceptor_1.IsOwnerInterceptor),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map