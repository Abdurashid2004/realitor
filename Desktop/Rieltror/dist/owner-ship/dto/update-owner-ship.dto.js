"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOwnerShipDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_owner_ship_dto_1 = require("./create-owner-ship.dto");
class UpdateOwnerShipDto extends (0, swagger_1.PartialType)(create_owner_ship_dto_1.CreateOwnerShipDto) {
}
exports.UpdateOwnerShipDto = UpdateOwnerShipDto;
//# sourceMappingURL=update-owner-ship.dto.js.map