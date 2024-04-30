"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const object_module_1 = require("./object/object.module");
const object_type_module_1 = require("./object-type/object-type.module");
const residence_type_module_1 = require("./residence-type/residence-type.module");
const object_category_module_1 = require("./object-category/object-category.module");
const object_status_module_1 = require("./object-status/object-status.module");
const currency_module_1 = require("./currency/currency.module");
const renevotion_module_1 = require("./renevotion/renevotion.module");
const window_side_module_1 = require("./window-side/window-side.module");
const room_type_module_1 = require("./room-type/room-type.module");
const owner_relation_module_1 = require("./owner-relation/owner-relation.module");
const owner_ship_module_1 = require("./owner-ship/owner-ship.module");
const reason_deleting_module_1 = require("./reason-deleting/reason-deleting.module");
const owner_cooperation_module_1 = require("./owner-cooperation/owner-cooperation.module");
const prisma_module_1 = require("./prisma/prisma.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            object_module_1.ObjectModule,
            object_type_module_1.ObjectTypeModule,
            residence_type_module_1.ResidenceTypeModule,
            object_category_module_1.ObjectCategoryModule,
            object_status_module_1.ObjectStatusModule,
            currency_module_1.CurrencyModule,
            renevotion_module_1.RenevotionModule,
            window_side_module_1.WindowSideModule,
            room_type_module_1.RoomTypeModule,
            owner_relation_module_1.OwnerRelationModule,
            owner_ship_module_1.OwnerShipModule,
            reason_deleting_module_1.ReasonDeletingModule,
            owner_cooperation_module_1.OwnerCooperationModule,
            prisma_module_1.PrismaModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map