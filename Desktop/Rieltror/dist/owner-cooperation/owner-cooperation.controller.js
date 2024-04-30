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
exports.OwnerCooperationController = void 0;
const common_1 = require("@nestjs/common");
const owner_cooperation_service_1 = require("./owner-cooperation.service");
const create_owner_cooperation_dto_1 = require("./dto/create-owner-cooperation.dto");
const update_owner_cooperation_dto_1 = require("./dto/update-owner-cooperation.dto");
let OwnerCooperationController = class OwnerCooperationController {
    constructor(ownerCooperationService) {
        this.ownerCooperationService = ownerCooperationService;
    }
    create(createOwnerCooperationDto) {
        return this.ownerCooperationService.create(createOwnerCooperationDto);
    }
    findAll() {
        return this.ownerCooperationService.findAll();
    }
    findOne(id) {
        return this.ownerCooperationService.findOne(+id);
    }
    update(id, updateOwnerCooperationDto) {
        return this.ownerCooperationService.update(+id, updateOwnerCooperationDto);
    }
    remove(id) {
        return this.ownerCooperationService.remove(+id);
    }
};
exports.OwnerCooperationController = OwnerCooperationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_owner_cooperation_dto_1.CreateOwnerCooperationDto]),
    __metadata("design:returntype", void 0)
], OwnerCooperationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OwnerCooperationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OwnerCooperationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_owner_cooperation_dto_1.UpdateOwnerCooperationDto]),
    __metadata("design:returntype", void 0)
], OwnerCooperationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OwnerCooperationController.prototype, "remove", null);
exports.OwnerCooperationController = OwnerCooperationController = __decorate([
    (0, common_1.Controller)('owner-cooperation'),
    __metadata("design:paramtypes", [owner_cooperation_service_1.OwnerCooperationService])
], OwnerCooperationController);
//# sourceMappingURL=owner-cooperation.controller.js.map