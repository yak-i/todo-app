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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneAction = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("../../user/user.entity");
const todo_entity_1 = require("../../todo/entities/todo.entity");
let DoneAction = class DoneAction {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DoneAction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoneAction.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: false, onDelete: 'RESTRICT' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], DoneAction.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => todo_entity_1.Todo, { nullable: false, onDelete: 'RESTRICT' }),
    __metadata("design:type", Object)
], DoneAction.prototype, "todo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DoneAction.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DoneAction.prototype, "updatedAt", void 0);
DoneAction = __decorate([
    (0, typeorm_1.Entity)()
], DoneAction);
exports.DoneAction = DoneAction;
//# sourceMappingURL=doneAction.entity.js.map