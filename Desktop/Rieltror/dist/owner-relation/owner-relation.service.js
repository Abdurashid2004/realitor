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
exports.OwnerRelationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OwnerRelationService = class OwnerRelationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOwnerRelationDto) {
        const createdOwnerRelation = await this.prisma.ownerRelation.create({
            data: createOwnerRelationDto,
        });
        return createdOwnerRelation;
    }
    async findAll() {
        const allOwnerRelations = await this.prisma.ownerRelation.findMany();
        return allOwnerRelations;
    }
    async findOne(id) {
        const ownerRelation = await this.prisma.ownerRelation.findUnique({
            where: { id },
        });
        return ownerRelation;
    }
    async update(id, updateOwnerRelationDto) {
        const updatedOwnerRelation = await this.prisma.ownerRelation.update({
            where: { id },
            data: updateOwnerRelationDto,
        });
        return updatedOwnerRelation;
    }
    async remove(id) {
        const deletedOwnerRelation = await this.prisma.ownerRelation.delete({
            where: { id },
        });
        return deletedOwnerRelation;
    }
};
exports.OwnerRelationService = OwnerRelationService;
exports.OwnerRelationService = OwnerRelationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OwnerRelationService);
//# sourceMappingURL=owner-relation.service.js.map