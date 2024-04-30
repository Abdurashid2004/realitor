import { ResidenceType } from '@prisma/client';
import { IsArray, IsString } from 'class-validator';

export class CreateObjectTypeDto {
  @IsString()
  name: string;

  @IsArray()
  objectId: Object[];

  @IsArray()
  residenceTypeId: ResidenceType[];
}
