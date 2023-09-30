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
exports.Todo = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("../../user/user.entity");
let Todo = class Todo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Todo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Todo.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Todo.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Todo.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Todo.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { array: true }),
    __metadata("design:type", Array)
], Todo.prototype, "weekDays", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { array: true }),
    __metadata("design:type", Array)
], Todo.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Todo.prototype, "visible", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Todo.prototype, "startedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Todo.prototype, "endedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json', { nullable: false }),
    __metadata("design:type", Object)
], Todo.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: false, onDelete: 'RESTRICT' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], Todo.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Todo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Todo.prototype, "updatedAt", void 0);
Todo = __decorate([
    (0, typeorm_1.Entity)()
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.entity.js.map