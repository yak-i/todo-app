"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneActionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const doneAction_controller_1 = require("./controllers/doneAction.controller");
const doneAction_entity_1 = require("./entities/doneAction.entity");
const doneAction_service_1 = require("./services/doneAction.service");
let DoneActionModule = class DoneActionModule {
};
DoneActionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([doneAction_entity_1.DoneAction])],
        providers: [doneAction_service_1.DoneActionService],
        controllers: [doneAction_controller_1.DoneActionController],
    })
], DoneActionModule);
exports.DoneActionModule = DoneActionModule;
//# sourceMappingURL=doneAction.module.js.map