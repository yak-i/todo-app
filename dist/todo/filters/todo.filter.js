"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoFilter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
class TodoNotFoundConstraintErrorToCatch {
    static [Symbol.hasInstance](instance) {
        return instance instanceof typeorm_1.EntityNotFoundError;
    }
}
let TodoFilter = class TodoFilter {
    catch(_, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        response.status(common_1.HttpStatus.NOT_FOUND).json({
            statusCode: common_1.HttpStatus.NOT_FOUND,
            message: `Not found any todo with id: ${request.params.id}`,
            error: 'Todo Not Found',
        });
    }
};
TodoFilter = __decorate([
    (0, common_1.Catch)(TodoNotFoundConstraintErrorToCatch)
], TodoFilter);
exports.TodoFilter = TodoFilter;
//# sourceMappingURL=todo.filter.js.map