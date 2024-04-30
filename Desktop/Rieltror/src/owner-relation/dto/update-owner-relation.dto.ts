import { PartialType } from '@nestjs/swagger';
import { CreateOwnerRelationDto } from './create-owner-relation.dto';

export class UpdateOwnerRelationDto extends PartialType(CreateOwnerRelationDto) {}
