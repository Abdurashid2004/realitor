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
exports.ObjectTypeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ObjectTypeService = class ObjectTypeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createObjectTypeDto) {
        return this.prisma.objectType.create({ data: createObjectTypeDto });
    }
    async findAll() {
        return this.prisma.objectType.findMany();
    }
    async findOne(id) {
        return this.prisma.objectType.findUnique({ where: { id } });
    }
    async update(id, updateObjectTypeDto) {
        return this.prisma.objectType.update({
            where: { id },
            data: updateObjectTypeDto,
        });
    }
    async remove(id) {
        return this.prisma.objectType.delete({ where: { id } });
    }
};
exports.ObjectTypeService = ObjectTypeService;
exports.ObjectTypeService = ObjectTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ObjectTypeService);
//# sourceMappingURL=object-type.service.js.map