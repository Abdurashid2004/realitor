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
exports.ReasonDeletingController = void 0;
const common_1 = require("@nestjs/common");
const reason_deleting_service_1 = require("./reason-deleting.service");
const create_reason_deleting_dto_1 = require("./dto/create-reason-deleting.dto");
const update_reason_deleting_dto_1 = require("./dto/update-reason-deleting.dto");
let ReasonDeletingController = class ReasonDeletingController {
    constructor(reasonDeletingService) {
        this.reasonDeletingService = reasonDeletingService;
    }
    create(createReasonDeletingDto) {
        return this.reasonDeletingService.create(createReasonDeletingDto);
    }
    findAll() {
        return this.reasonDeletingService.findAll();
    }
    findOne(id) {
        return this.reasonDeletingService.findOne(+id);
    }
    update(id, updateReasonDeletingDto) {
        return this.reasonDeletingService.update(+id, updateReasonDeletingDto);
    }
    remove(id) {
        return this.reasonDeletingService.remove(+id);
    }
};
exports.ReasonDeletingController = ReasonDeletingController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reason_deleting_dto_1.CreateReasonDeletingDto]),
    __metadata("design:returntype", void 0)
], ReasonDeletingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReasonDeletingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReasonDeletingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reason_deleting_dto_1.UpdateReasonDeletingDto]),
    __metadata("design:returntype", void 0)
], ReasonDeletingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReasonDeletingController.prototype, "remove", null);
exports.ReasonDeletingController = ReasonDeletingController = __decorate([
    (0, common_1.Controller)('reason-deleting'),
    __metadata("design:paramtypes", [reason_deleting_service_1.ReasonDeletingService])
], ReasonDeletingController);
//# sourceMappingURL=reason-deleting.controller.js.map