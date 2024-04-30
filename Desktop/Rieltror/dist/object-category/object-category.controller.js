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
exports.ObjectCategoryController = void 0;
const common_1 = require("@nestjs/common");
const object_category_service_1 = require("./object-category.service");
const create_object_category_dto_1 = require("./dto/create-object-category.dto");
const update_object_category_dto_1 = require("./dto/update-object-category.dto");
let ObjectCategoryController = class ObjectCategoryController {
    constructor(objectCategoryService) {
        this.objectCategoryService = objectCategoryService;
    }
    create(createObjectCategoryDto) {
        return this.objectCategoryService.create(createObjectCategoryDto);
    }
    findAll() {
        return this.objectCategoryService.findAll();
    }
    findOne(id) {
        return this.objectCategoryService.findOne(+id);
    }
    update(id, updateObjectCategoryDto) {
        return this.objectCategoryService.update(+id, updateObjectCategoryDto);
    }
    remove(id) {
        return this.objectCategoryService.remove(+id);
    }
};
exports.ObjectCategoryController = ObjectCategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_object_category_dto_1.CreateObjectCategoryDto]),
    __metadata("design:returntype", void 0)
], ObjectCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ObjectCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ObjectCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_object_category_dto_1.UpdateObjectCategoryDto]),
    __metadata("design:returntype", void 0)
], ObjectCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ObjectCategoryController.prototype, "remove", null);
exports.ObjectCategoryController = ObjectCategoryController = __decorate([
    (0, common_1.Controller)('object-category'),
    __metadata("design:paramtypes", [object_category_service_1.ObjectCategoryService])
], ObjectCategoryController);
//# sourceMappingURL=object-category.controller.js.map