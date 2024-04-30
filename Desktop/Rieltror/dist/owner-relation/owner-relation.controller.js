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
exports.OwnerRelationController = void 0;
const common_1 = require("@nestjs/common");
const owner_relation_service_1 = require("./owner-relation.service");
const create_owner_relation_dto_1 = require("./dto/create-owner-relation.dto");
const update_owner_relation_dto_1 = require("./dto/update-owner-relation.dto");
let OwnerRelationController = class OwnerRelationController {
    constructor(ownerRelationService) {
        this.ownerRelationService = ownerRelationService;
    }
    create(createOwnerRelationDto) {
        return this.ownerRelationService.create(createOwnerRelationDto);
    }
    findAll() {
        return this.ownerRelationService.findAll();
    }
    findOne(id) {
        return this.ownerRelationService.findOne(+id);
    }
    update(id, updateOwnerRelationDto) {
        return this.ownerRelationService.update(+id, updateOwnerRelationDto);
    }
    remove(id) {
        return this.ownerRelationService.remove(+id);
    }
};
exports.OwnerRelationController = OwnerRelationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_owner_relation_dto_1.CreateOwnerRelationDto]),
    __metadata("design:returntype", void 0)
], OwnerRelationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OwnerRelationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OwnerRelationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_owner_relation_dto_1.UpdateOwnerRelationDto]),
    __metadata("design:returntype", void 0)
], OwnerRelationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OwnerRelationController.prototype, "remove", null);
exports.OwnerRelationController = OwnerRelationController = __decorate([
    (0, common_1.Controller)('owner-relation'),
    __metadata("design:paramtypes", [owner_relation_service_1.OwnerRelationService])
], OwnerRelationController);
//# sourceMappingURL=owner-relation.controller.js.map