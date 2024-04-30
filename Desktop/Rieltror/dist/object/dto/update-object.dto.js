"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateObjectDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_object_dto_1 = require("./create-object.dto");
class UpdateObjectDto extends (0, swagger_1.PartialType)(create_object_dto_1.CreateObjectDto) {
}
exports.UpdateObjectDto = UpdateObjectDto;
//# sourceMappingURL=update-object.dto.js.map