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
exports.ResidenceTypeController = void 0;
const common_1 = require("@nestjs/common");
const residence_type_service_1 = require("./residence-type.service");
const create_residence_type_dto_1 = require("./dto/create-residence-type.dto");
const update_residence_type_dto_1 = require("./dto/update-residence-type.dto");
let ResidenceTypeController = class ResidenceTypeController {
    constructor(residenceTypeService) {
        this.residenceTypeService = residenceTypeService;
    }
    create(createResidenceTypeDto) {
        return this.residenceTypeService.create(createResidenceTypeDto);
    }
    findAll() {
        return this.residenceTypeService.findAll();
    }
    findOne(id) {
        return this.residenceTypeService.findOne(+id);
    }
    update(id, updateResidenceTypeDto) {
        return this.residenceTypeService.update(+id, updateResidenceTypeDto);
    }
    remove(id) {
        return this.residenceTypeService.remove(+id);
    }
};
exports.ResidenceTypeController = ResidenceTypeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_residence_type_dto_1.CreateResidenceTypeDto]),
    __metadata("design:returntype", void 0)
], ResidenceTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResidenceTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResidenceTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_residence_type_dto_1.UpdateResidenceTypeDto]),
    __metadata("design:returntype", void 0)
], ResidenceTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResidenceTypeController.prototype, "remove", null);
exports.ResidenceTypeController = ResidenceTypeController = __decorate([
    (0, common_1.Controller)('residence-type'),
    __metadata("design:paramtypes", [residence_type_service_1.ResidenceTypeService])
], ResidenceTypeController);
//# sourceMappingURL=residence-type.controller.js.map