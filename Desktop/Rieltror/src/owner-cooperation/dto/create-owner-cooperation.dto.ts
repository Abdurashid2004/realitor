import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty } from 'class-validator';
import { CreateOwnerRelationDto } from '../../owner-relation/dto/create-owner-relation.dto';

export class CreateOwnerCooperationDto {
  @IsNotEmpty()
  name: string;

  @IsArray()
  @Type(() => CreateOwnerRelationDto)
  ownerRelationId: CreateOwnerRelationDto[];
}
