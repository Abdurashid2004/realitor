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
exports.CurrencyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CurrencyService = class CurrencyService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createCurrencyDto) {
        return this.prismaService.currency.create({
            data: createCurrencyDto,
        });
    }
    async findAll() {
        return this.prismaService.currency.findMany();
    }
    async findOne(id) {
        return this.prismaService.currency.findUnique({
            where: { id },
        });
    }
    async update(id, updateCurrencyDto) {
        return this.prismaService.currency.update({
            where: { id },
            data: updateCurrencyDto,
        });
    }
    async remove(id) {
        return this.prismaService.currency.delete({
            where: { id },
        });
    }
};
exports.CurrencyService = CurrencyService;
exports.CurrencyService = CurrencyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CurrencyService);
//# sourceMappingURL=currency.service.js.map