import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateResidenceTypeDto {
  @IsString()
  name: string;

  @IsArray()
  @IsOptional()
  objectId: object[];

  @IsInt()
  @IsOptional()
  objectTypeId: number;
}
