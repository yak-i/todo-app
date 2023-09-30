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
exports.DoneActionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const doneAction_entity_1 = require("../entities/doneAction.entity");
let DoneActionService = class DoneActionService {
    constructor(repo) {
        this.repo = repo;
    }
    createDoneAction(newDoneAction) {
        const doneAction = this.repo.create(newDoneAction);
        return this.repo.save(doneAction);
    }
    listDoneAction(todoIds, day, owner) {
        return this.repo.find({
            where: {
                owner: { id: owner.id },
                todo: { id: (0, typeorm_2.In)(todoIds || []) },
                day,
            },
            loadRelationIds: true,
        });
    }
    getDoneAction(id) {
        return this.repo.findOneOrFail({
            where: { id },
            loadRelationIds: true,
        });
    }
    removeDoneAction(doneAction) {
        return this.repo.remove(doneAction);
    }
};
DoneActionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doneAction_entity_1.DoneAction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DoneActionService);
exports.DoneActionService = DoneActionService;
//# sourceMappingURL=doneAction.service.js.map