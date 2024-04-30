import { IsArray, IsNotEmpty } from 'class-validator';
import { CreateOwnerRelationDto } from '../../owner-relation/dto/create-owner-relation.dto';
import { Type } from 'class-transformer';

export class CreateRenevotionDto {
  @IsNotEmpty()
  name: string;

  @IsArray()
  @Type(() => CreateOwnerRelationDto)
  ownerRelationId: CreateOwnerRelationDto[];
}
