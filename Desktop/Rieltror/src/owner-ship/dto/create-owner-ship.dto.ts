import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { CreateOwnerRelationDto } from '../../owner-relation/dto/create-owner-relation.dto';

export class CreateOwnerShipDto {
  @IsString()
  name: string;

  @Type(() => CreateOwnerRelationDto)
  ownerRelationId: CreateOwnerRelationDto[];
}
