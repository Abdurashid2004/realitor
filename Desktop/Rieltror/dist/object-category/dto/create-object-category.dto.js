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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateObjectCategoryDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const create_object_dto_1 = require("../../object/dto/create-object.dto");
const create_residence_type_dto_1 = require("../../residence-type/dto/create-residence-type.dto");
class CreateObjectCategoryDto {
}
exports.CreateObjectCategoryDto = CreateObjectCategoryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectCategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => create_object_dto_1.CreateObjectDto),
    __metadata("design:type", create_object_dto_1.CreateObjectDto)
], CreateObjectCategoryDto.prototype, "objectId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => create_residence_type_dto_1.CreateResidenceTypeDto),
    __metadata("design:type", Array)
], CreateObjectCategoryDto.prototype, "residenceTypeId", void 0);
//# sourceMappingURL=create-object-category.dto.js.map