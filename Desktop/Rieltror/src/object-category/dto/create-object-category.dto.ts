import { IsArray, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateObjectDto } from '../../object/dto/create-object.dto';
import { CreateResidenceTypeDto } from '../../residence-type/dto/create-residence-type.dto';

export class CreateObjectCategoryDto {
  @IsString()
  name: string;

  @IsArray()
  @Type(() => CreateObjectDto)
  objectId: CreateObjectDto;

  @IsArray()
  @Type(() => CreateResidenceTypeDto)
  residenceTypeId: CreateResidenceTypeDto[];
}
