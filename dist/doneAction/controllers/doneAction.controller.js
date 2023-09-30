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
exports.DoneActionController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const session_auth_guard_1 = require("../../auth/guards/session-auth.guard");
const user_decorator_1 = require("../../user/user.decorator");
const user_entity_1 = require("../../user/user.entity");
const doneAction_create_dto_1 = require("../dtos/doneAction-create.dto");
const doneAction_entity_1 = require("../entities/doneAction.entity");
const doneAction_filter_1 = require("../filters/doneAction.filter");
const is_owner_interceptor_1 = require("../interceptors/is-owner.interceptor");
const parse_doneAction_pipe_1 = require("../pipes/parse-doneAction.pipe");
const doneAction_service_1 = require("../services/doneAction.service");
let DoneActionController = class DoneActionController {
    constructor(service) {
        this.service = service;
    }
    createDoneAction(todoId, newDoneAction, user) {
        newDoneAction.owner = user;
        newDoneAction.todo = todoId;
        return this.service.createDoneAction(newDoneAction);
    }
    listDoneAction(todoIds, day, user) {
        return this.service.listDoneAction(todoIds, day, user);
    }
    removeDoneAction(doneAction) {
        return this.service.removeDoneAction(doneAction);
    }
};
__decorate([
    (0, common_1.Post)(':todoId'),
    __param(0, (0, common_1.Param)('todoId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, doneAction_create_dto_1.DoneActionCreate,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], DoneActionController.prototype, "createDoneAction", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('todoIds')),
    __param(1, (0, common_1.Query)('day')),
    __param(2, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], DoneActionController.prototype, "listDoneAction", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe, parse_doneAction_pipe_1.ParseDoneActionPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [doneAction_entity_1.DoneAction]),
    __metadata("design:returntype", Promise)
], DoneActionController.prototype, "removeDoneAction", null);
DoneActionController = __decorate([
    (0, common_1.Controller)('doneAction'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, jwt_auth_guard_1.JWTAuthGuard),
    (0, common_1.UseFilters)(doneAction_filter_1.DoneActionFilter),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor, is_owner_interceptor_1.IsOwnerInterceptor),
    __metadata("design:paramtypes", [doneAction_service_1.DoneActionService])
], DoneActionController);
exports.DoneActionController = DoneActionController;
//# sourceMappingURL=doneAction.controller.js.map