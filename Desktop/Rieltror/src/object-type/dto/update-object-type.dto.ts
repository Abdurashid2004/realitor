import { PartialType } from '@nestjs/swagger';
import { CreateObjectTypeDto } from './create-object-type.dto';

export class UpdateObjectTypeDto extends PartialType(CreateObjectTypeDto) {}
