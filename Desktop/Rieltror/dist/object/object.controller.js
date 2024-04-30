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
exports.ObjectController = void 0;
const common_1 = require("@nestjs/common");
const object_service_1 = require("./object.service");
const create_object_dto_1 = require("./dto/create-object.dto");
const update_object_dto_1 = require("./dto/update-object.dto");
let ObjectController = class ObjectController {
    constructor(objectService) {
        this.objectService = objectService;
    }
    create(createObjectDto) {
        return this.objectService.create(createObjectDto);
    }
    findAll() {
        return this.objectService.findAll();
    }
    findOne(id) {
        return this.objectService.findOne(+id);
    }
    update(id, updateObjectDto) {
        return this.objectService.update(+id, updateObjectDto);
    }
    remove(id) {
        return this.objectService.remove(+id);
    }
};
exports.ObjectController = ObjectController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_object_dto_1.CreateObjectDto]),
    __metadata("design:returntype", void 0)
], ObjectController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ObjectController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ObjectController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_object_dto_1.UpdateObjectDto]),
    __metadata("design:returntype", void 0)
], ObjectController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ObjectController.prototype, "remove", null);
exports.ObjectController = ObjectController = __decorate([
    (0, common_1.Controller)('object'),
    __metadata("design:paramtypes", [object_service_1.ObjectService])
], ObjectController);
//# sourceMappingURL=object.controller.js.map