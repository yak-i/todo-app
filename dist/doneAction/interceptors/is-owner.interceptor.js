"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOwnerInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let IsOwnerInterceptor = class IsOwnerInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return next.handle().pipe((0, rxjs_1.tap)(doneAction => {
            if (!user || doneAction instanceof Array)
                return;
            const userId = typeof doneAction.owner === 'object'
                ? doneAction.owner.id
                : doneAction.owner;
            const isOwner = userId === user.id;
            if (!isOwner) {
                throw new common_1.ForbiddenException(`DoneAction does not belong to you`);
            }
        }));
    }
};
IsOwnerInterceptor = __decorate([
    (0, common_1.Injectable)()
], IsOwnerInterceptor);
exports.IsOwnerInterceptor = IsOwnerInterceptor;
//# sourceMappingURL=is-owner.interceptor.js.map