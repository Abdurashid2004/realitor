"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateObjectTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_object_type_dto_1 = require("./create-object-type.dto");
class UpdateObjectTypeDto extends (0, swagger_1.PartialType)(create_object_type_dto_1.CreateObjectTypeDto) {
}
exports.UpdateObjectTypeDto = UpdateObjectTypeDto;
//# sourceMappingURL=update-object-type.dto.js.map