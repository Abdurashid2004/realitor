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
exports.RenevotionController = void 0;
const common_1 = require("@nestjs/common");
const renevotion_service_1 = require("./renevotion.service");
const create_renevotion_dto_1 = require("./dto/create-renevotion.dto");
const update_renevotion_dto_1 = require("./dto/update-renevotion.dto");
let RenevotionController = class RenevotionController {
    constructor(renevotionService) {
        this.renevotionService = renevotionService;
    }
    create(createRenevotionDto) {
        return this.renevotionService.create(createRenevotionDto);
    }
    findAll() {
        return this.renevotionService.findAll();
    }
    findOne(id) {
        return this.renevotionService.findOne(+id);
    }
    update(id, updateRenevotionDto) {
        return this.renevotionService.update(+id, updateRenevotionDto);
    }
    remove(id) {
        return this.renevotionService.remove(+id);
    }
};
exports.RenevotionController = RenevotionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_renevotion_dto_1.CreateRenevotionDto]),
    __metadata("design:returntype", void 0)
], RenevotionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RenevotionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RenevotionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_renevotion_dto_1.UpdateRenevotionDto]),
    __metadata("design:returntype", void 0)
], RenevotionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RenevotionController.prototype, "remove", null);
exports.RenevotionController = RenevotionController = __decorate([
    (0, common_1.Controller)('renevotion'),
    __metadata("design:paramtypes", [renevotion_service_1.RenevotionService])
], RenevotionController);
//# sourceMappingURL=renevotion.controller.js.map