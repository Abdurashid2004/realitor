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
exports.WindowSideController = void 0;
const common_1 = require("@nestjs/common");
const window_side_service_1 = require("./window-side.service");
const create_window_side_dto_1 = require("./dto/create-window-side.dto");
const update_window_side_dto_1 = require("./dto/update-window-side.dto");
let WindowSideController = class WindowSideController {
    constructor(windowSideService) {
        this.windowSideService = windowSideService;
    }
    create(createWindowSideDto) {
        return this.windowSideService.create(createWindowSideDto);
    }
    findAll() {
        return this.windowSideService.findAll();
    }
    findOne(id) {
        return this.windowSideService.findOne(+id);
    }
    update(id, updateWindowSideDto) {
        return this.windowSideService.update(+id, updateWindowSideDto);
    }
    remove(id) {
        return this.windowSideService.remove(+id);
    }
};
exports.WindowSideController = WindowSideController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_window_side_dto_1.CreateWindowSideDto]),
    __metadata("design:returntype", void 0)
], WindowSideController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WindowSideController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WindowSideController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_window_side_dto_1.UpdateWindowSideDto]),
    __metadata("design:returntype", void 0)
], WindowSideController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WindowSideController.prototype, "remove", null);
exports.WindowSideController = WindowSideController = __decorate([
    (0, common_1.Controller)('window-side'),
    __metadata("design:paramtypes", [window_side_service_1.WindowSideService])
], WindowSideController);
//# sourceMappingURL=window-side.controller.js.map