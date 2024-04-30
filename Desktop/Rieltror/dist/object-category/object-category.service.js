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
exports.ObjectCategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ObjectCategoryService = class ObjectCategoryService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createObjectCategoryDto) {
        return this.prismaService.objectCategory.create({
            data: createObjectCategoryDto,
        });
    }
    async findAll() {
        return this.prismaService.objectCategory.findMany();
    }
    async findOne(id) {
        return this.prismaService.objectCategory.findUnique({
            where: { id },
        });
    }
    async update(id, updateObjectCategoryDto) {
        return this.prismaService.objectCategory.update({
            where: { id },
            data: updateObjectCategoryDto,
        });
    }
    async remove(id) {
        return this.prismaService.objectCategory.delete({
            where: { id },
        });
    }
};
exports.ObjectCategoryService = ObjectCategoryService;
exports.ObjectCategoryService = ObjectCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ObjectCategoryService);
//# sourceMappingURL=object-category.service.js.map