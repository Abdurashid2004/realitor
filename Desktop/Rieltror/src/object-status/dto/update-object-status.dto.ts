import { PartialType } from '@nestjs/swagger';
import { CreateObjectStatusDto } from './create-object-status.dto';

export class UpdateObjectStatusDto extends PartialType(CreateObjectStatusDto) {}
